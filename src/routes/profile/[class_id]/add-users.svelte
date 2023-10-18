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
	import AddUser from '$lib/components/profile/AddUser.svelte';
	import UserQrCode from '$lib/components/profile/UserQrCode.svelte';
	import Text from '$lib/components/Text.svelte';
	import { page, session } from '$app/stores';
	import { updateTeacherClasses } from '$lib/classes';

	export let classInfo: ITeacherClass;

	let studentQrCode: string | undefined = undefined;
	let selectedStudent: IUser | undefined = undefined;
</script>

<h4>{classInfo.name}</h4>
<h5><Text key="students" /></h5>
<div class="flex">
	<div class="flex flex-col">
		{#each classInfo.students.sort( (a, b) => a.firstname.localeCompare(b.firstname, $session.languages.replace('_', '-')) ) as student}
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
		{:else}
			<Text key="no_students" />
		{/each}
	</div>
	<div class="flex justify-center items-start w-full">
		{#if studentQrCode && selectedStudent}
			<UserQrCode qrCode={studentQrCode} student={selectedStudent} />
		{:else}
			<AddUser
				on:new-user={async ({ detail: newUser }) => {
					const res = await fetch(getUrl(`/api/classes/${$page.params.class_id}/add-user`), {
						method: 'POST',
						body: JSON.stringify({ user: newUser }),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (res.ok) {
						classInfo.students = [...classInfo.students, newUser];
						$session.user.classes = updateTeacherClasses(classInfo, $session);
					}
				}}
			/>
		{/if}
	</div>
</div>
