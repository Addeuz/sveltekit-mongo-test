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

	export let classInfo: ITeacherClass;

	let studentQrCode: string | undefined = undefined;
	let selectedStudent: IUser | undefined = undefined;
</script>

<h4>{classInfo.name}</h4>
<h5>Students</h5>
<div class="flex">
	<div class="flex flex-col">
		{#each classInfo.students as student}
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
	</div>
	{#if studentQrCode && selectedStudent}
		<UserQrCode qrCode={studentQrCode} student={selectedStudent} />
	{:else}
		<div />
	{/if}
</div>