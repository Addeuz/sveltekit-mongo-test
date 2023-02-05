<script context="module" lang="ts">
	import Text from '$lib/components/Text.svelte';
	import type { IUser } from '$lib/database/models/users.models';
	import { getUrl } from '$lib/utils';
	import type { Load } from '@sveltejs/kit';
	import type { ClassAttributes } from 'src/global';

	export const load: Load = async () => {
		const res = await fetch(getUrl('/api/users'));

		const students = await res.json();

		return {
			props: {
				students: students.students
			}
		};
	};
</script>

<script lang="ts">
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { activeClass } from '$lib/stores/activeClass';

	export let students: IUser[];

	let submitted: boolean = false;
	let isValid: boolean;
	let error: string;
	let success: string;
	let loading: boolean = false;
	let studentFilter = '';
	let fields: ClassAttributes = {
		name: '',
		students: []
	};

	async function createClass() {
		error = undefined;
		loading = true;
		// validation
		submitted = true;
		try {
			if (fields.name.length === 0) {
				error = 'Class name can not me empty';
				loading = false;
				submitted = false;
				return;
			}

			const res = await fetch(getUrl('/api/classes'), {
				method: 'POST',
				body: JSON.stringify({
					...fields
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if (res.ok) {
				const data = await res.json();
				success = data.message;
				loading = false;
				submitted = false;
				$activeClass = data.class;
				fields = {
					name: '',
					students: []
				};
			} else {
				const data = await res.json();
				error = data.message;
				success = null;
				loading = false;
				throw error;
			}
		} catch (err) {
			console.error(err);
			loading = false;
			submitted = false;
		}
	}

	$: selectedStudentNames = fields.students.map(
		(id) => students.find(({ _id }) => id === _id).username
	);
</script>

<h2><Text key="create_class" /></h2>
<div class="flex flex-col gap-4">
	<input
		type="text"
		name="username"
		bind:value={fields.name}
		placeholder="Username"
		on:change={() => {
			submitted = false;
		}}
	/>
	<h5>Select students</h5>
	{#if selectedStudentNames.length > 0}
		<p>
			Selected students: {selectedStudentNames.join(', ')}
		</p>
	{:else}
		<p>No students selected</p>
	{/if}
	<div id="student-select">
		<input type="text" bind:value={studentFilter} placeholder="Search for students" />
		<div id="students" class="grid grid-cols-6 h-80 overflow-y-auto items-start">
			{#each students.filter((student) => {
				if (studentFilter.length > 0) {
					return student.username.toLowerCase().includes(studentFilter.toLowerCase());
				}

				return student;
			}) as student}
				<label class="flex items-center gap-2">
					<input type="checkbox" bind:group={fields.students} name="flavours" value={student._id} />
					{student.username}
				</label>
			{/each}
		</div>
	</div>
	<SubmitButton disabled={submitted || fields.name.length === 0} action={createClass} {loading}>
		<Text key="create_class" />
	</SubmitButton>
	{#if error}
		<p class="text-red-400">{error}</p>
	{/if}
	{#if success}
		<p class="text-green-500">{success}</p>
	{/if}
</div>
