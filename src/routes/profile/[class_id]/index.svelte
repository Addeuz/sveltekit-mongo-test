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
	import { TaskKey, keyToThumbnailIdentifier, taskKeys } from '$lib/tasks';
	import printLayout from '$lib/print/layout.html?raw';
	import { getStudentListMarkup } from '$lib/print/index';

	export let classInfo: ITeacherClass;

	let removeStudentOpen = false;
	let removeStudentSelectedId: string | undefined = undefined;
	let removeClassOpen = false;
	let removeClassSelectedId: string | undefined = undefined;
	let studentQrCode: string | undefined = undefined;
	let selectedStudent: IUser | undefined = undefined;
	let editTasksOpen = false;
	let editTasks: { [key: string]: TaskKey[] } = {};
	let working = false;

	let iframe: HTMLIFrameElement;

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

	let printMarkup = '';

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
	$: (async () => {
		printMarkup = printLayout.replace(
			'[[replace]]',
			await getStudentListMarkup(classInfo.students)
		);
	})();
</script>

<h4 class="ml-4">{classInfo.name}</h4>
<h5 class="ml-4"><Text key="students" /></h5>
<div class="grid mx-4" style="grid-template-columns: 150px 1fr;">
	<div class="flex flex-col">
		{#each classInfo.students.sort( (a, b) => a.firstname.localeCompare(b.firstname, lang.replace('_', '-')) ) as student}
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
			class="border border-blue-400 p-2 rounded-xl text-blue-400 flex self-center justify-center mt-4 hover:bg-blue-200 w-full"
			on:click={() => {
				iframe.contentWindow.print();
			}}
		>
			{i18n['print_users'][lang]}
		</button>
		<button
			class="border border-blue-400 p-2 rounded-xl text-blue-400 flex self-center justify-center mt-4 hover:bg-blue-200 w-full"
			on:click={() => {
				editTasksOpen = true;
				for (const { _id, tasks } of classInfo.students) {
					console.log(_id, tasks);
					editTasks[_id] = tasks;
				}
			}}
		>
			{i18n['edit_tasks'][lang]}
		</button>
		<button
			class="border border-red-400 p-2 rounded-xl text-red-400 flex self-center justify-center mt-4 hover:bg-red-200 w-full"
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

<iframe
	bind:this={iframe}
	title="print"
	srcdoc={printMarkup}
	style="width: 850px; height: 1200px; display: none;"
/>

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
				disabled={working}
				class="bg-red-400 p-2 rounded-xl text-white flex self-center justify-center w-24"
				on:click={async () => {
					working = true;
					if (removeStudentSelectedId) {
						const res = await removeStudent(removeStudentSelectedId);

						if (res.ok) {
							location.reload();
						}
					}
					working = false;
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
				disabled={working}
				on:click={async () => {
					working = true;
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
					working = false;
				}}
			>
				{i18n['yes'][lang]}
			</button>
		</div>
	</div>
</Modal>
<Modal bind:open={editTasksOpen}>
	<div
		class="grid mb-8 items-center"
		style={`grid-template-columns: repeat(11, minmax(0, 1fr)); grid-template-rows: repeat(${
			classInfo.students.length + 1
		}, minmax(0, 30px))`}
	>
		<span />
		{#each taskKeys as task}
			<img
				src={`/thumbnails/${keyToThumbnailIdentifier(task).name}-01.${
					keyToThumbnailIdentifier(task).extension
				}`}
				class="self-center mix-blend-multiply"
				alt=""
				on:click={() => {
					const hasAllTasks = Object.values(editTasks).every((tasks) => tasks.includes(task));
					console.log(hasAllTasks);

					for (const [id, tasks] of Object.entries(editTasks)) {
						if (hasAllTasks) {
							editTasks[id] = tasks.filter((t) => t !== task);
						} else {
							const hasTask = tasks.includes(task);
							if (!hasTask) {
								editTasks[id] = [...tasks, task];
							}
						}
					}
				}}
			/>
		{/each}
		{#each classInfo.students as { _id: id, firstname, tasks }}
			<button
				on:click={() => {
					const hasAllTasks = taskKeys.every((t) => tasks.includes(t));
					if (hasAllTasks) {
						editTasks[id] = [];
					} else {
						editTasks[id] = [...taskKeys];
					}
				}}>{firstname}</button
			>
			{#each taskKeys as task}
				<input
					class="mx-auto"
					type="checkbox"
					checked={editTasks[id].includes(task)}
					on:click={() => {
						classInfo.students = classInfo.students.map((student) => {
							if (student._id === id) {
								if (editTasks[id].includes(task)) {
									editTasks[id] = editTasks[id].filter((t) => t !== task);
								} else {
									editTasks[id] = [...editTasks[id], task];
								}
							}

							return student;
						});
					}}
				/>
			{/each}
		{/each}
	</div>
	<div class="flex justify-between gap-3">
		<button
			class="border border-red-400 text-red-400 p-2 rounded-xl flex self-center justify-center w-24 hover:bg-red-200"
			on:click={() => {
				editTasksOpen = false;
				editTasks = {};
			}}
		>
			{i18n['close'][lang]}
		</button>
		<button
			class="border border-green-400 text-green-400 p-2 rounded-xl flex self-center justify-center w-24 hover:bg-green-200"
			disabled={working}
			on:click={async () => {
				classInfo.students = classInfo.students.map((student) => {
					student.tasks = editTasks[student._id];

					return student;
				});
				working = true;
				await fetch('/api/user/update-task', {
					method: 'PUT',
					body: JSON.stringify({
						editTasks
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				working = false;
				editTasksOpen = false;
			}}
		>
			{i18n['save'][lang]}
		</button>
	</div>
</Modal>
