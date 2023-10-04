<script lang="ts" context="module">
	import type { ITeacherClass } from '$lib/database/models/teacherClass.models';
	import type { IUser } from '$lib/database/models/users.models';
	import { generateQRCode, getUrl } from '$lib/utils';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		const res = await fetch(getUrl(`/api/classes/${page.params.class_id}`));

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					classInfo: data.classInfo
				}
			};
		}

		return {
			status: 301,
			redirect: '/profile'
		};
	};
</script>

<script lang="ts">
	import UserQrCode from '$lib/components/profile/UserQrCode.svelte';
	import Text from '$lib/components/Text.svelte';
	import { page, session } from '$app/stores';
	import { i18n } from '$lib/i18n';
	import { browser } from '$app/env';
	import Modal from '$lib/components/Modal.svelte';
	import { goto } from '$app/navigation';

	export let classInfo: ITeacherClass;

	let removeStudentOpen = false;
	let removeStudentSelectedId: string | undefined = undefined;
	let removeClassOpen = false;
	let removeClassSelectedId: string | undefined = undefined;
	let studentQrCode: string | undefined = undefined;
	let selectedStudent: IUser | undefined = undefined;

	async function removeStudent(user_id: string) {
		return await fetch('/api/user', {
			method: 'DELETE',
			body: JSON.stringify({
				user_id,
				class_id: $page.params.class_id
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<h4>{classInfo.name}</h4>
<h5><Text key="students" /></h5>
<div class="flex">
	<div class="flex flex-col">
		{#each classInfo.students.sort( (a, b) => a.firstname.localeCompare(b.firstname, $session.languages) ) as student}
			<button
				class="p-2 hover:bg-gray-200"
				on:click={async () => {
					if (selectedStudent?.username === student.username) {
						studentQrCode = undefined;
						selectedStudent = undefined;
					} else {
						studentQrCode = await generateQRCode(
							getUrl(`/login/student?username=${student.username}`)
						);
						selectedStudent = student;
					}
				}}
			>
				{student.firstname}
			</button>
		{/each}
		<button
			class=" border border-red-400 p-2 rounded-xl text-red-400 flex self-center justify-center mt-4 hover:bg-red-200"
			on:click={async () => {
				removeClassOpen = true;
				removeClassSelectedId = $page.params.class_id;
			}}
		>
			{i18n['remove_class'][lang]}
		</button>
	</div>
	{#if studentQrCode && selectedStudent}
		<div class="flex flex-col justify-center w-full">
			<UserQrCode qrCode={studentQrCode} student={selectedStudent} />
			<button
				class="bg-red-400 p-4 rounded-xl text-white flex self-center"
				on:click={() => {
					removeStudentOpen = true;
					removeStudentSelectedId = selectedStudent._id;
				}}
			>
				{i18n['remove'][lang]}
			</button>
		</div>
	{:else}
		<div />
	{/if}
</div>

<Modal bind:open={removeStudentOpen}>
	<div class="flex flex-col">
		<span>{i18n['sure_remove_student'][lang]}</span>
		<div class="flex justify-end gap-3">
			<button
				class="bg-green-400 p-2 rounded-xl text-white flex self-center justify-center w-24"
				on:click={() => {
					removeStudentOpen = false;
					removeStudentSelectedId = undefined;
				}}
			>
				{i18n['no'][lang]}
			</button>
			<button
				class="bg-red-400 p-2 rounded-xl text-white flex self-center justify-center w-24"
				on:click={async () => {
					if (removeStudentSelectedId) {
						const res = await removeStudent(removeStudentSelectedId);

						if (res.ok) {
							location.reload();
						}
					}
				}}
			>
				{i18n['yes'][lang]}
			</button>
		</div>
	</div>
</Modal>

<Modal bind:open={removeClassOpen}>
	<div class="flex flex-col">
		<span>{i18n['sure_remove_class'][lang]}</span>
		<div class="flex justify-end gap-3">
			<button
				class="bg-green-400 p-2 rounded-xl text-white flex self-center justify-center w-24"
				on:click={() => {
					removeClassOpen = false;
					removeClassSelectedId = undefined;
				}}
			>
				{i18n['no'][lang]}
			</button>
			<button
				class="bg-red-400 p-2 rounded-xl text-white flex self-center justify-center w-24"
				on:click={async () => {
					if (removeClassSelectedId) {
						for await (const student of classInfo.students) {
							await removeStudent(student._id);
						}

						const res = await fetch(`/api/classes/${removeClassSelectedId}`, {
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json'
							}
						});

						if (res.ok) {
							$session.user.classes = $session.user.classes.filter(
								(c) => c._id.toString() !== removeClassSelectedId
							);
							goto('/profile');
						}
					}
				}}
			>
				{i18n['yes'][lang]}
			</button>
		</div>
	</div>
</Modal>
