<script lang="ts" context="module">
	import { keyToThumbnailIdentifier, TaskColors, TaskOverview } from '$lib/tasks';
	import {
		calculateStudentTasks,
		calculateTaskModalData,
		getUrl,
		TaskModalAnswers
	} from '$lib/utils';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		const res = await fetch(getUrl(`/api/classes/${page.params.class_id}/task-overview`));

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					taskOverview: data.taskOverview
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
	import ColorDate from '$lib/components/overview/ColorDate.svelte';
	import TaskDataModal from '$lib/components/overview/TaskDataModal.svelte';
	import TaskStats from '$lib/components/overview/TaskStats.svelte';
	import Text from '$lib/components/Text.svelte';
	import { TaskKey, taskKeys } from '$lib/tasks';
	import type { AnswerAttributes } from 'src/global';
	import type { ICompletedRun } from '$lib/database/models/completedTasks.models';

	export let taskOverview: TaskOverview;

	let selectedTasks:
		| {
				key: TaskKey;
				tasks: ICompletedRun[];
				studentTasks: Map<
					string,
					{
						tasks: { date: Date; name: string; color: TaskColors; answers: AnswerAttributes[] }[];
						firstname: string;
					}
				>;
		  }
		| undefined = undefined;

	let selectedAnswers: [Date, TaskModalAnswers] | undefined = undefined;
	let selectedName: string | undefined = undefined;

	$: modalOpen = selectedAnswers !== undefined;
</script>

<div class="w-3/4 mx-auto flex flex-col">
	{#if selectedTasks === undefined}
		{#each taskKeys as key}
			<div
				class="grid grid-cols-2 items-center gap-4 p-2 cursor-pointer hover:bg-gray-400"
				on:click={() => {
					selectedTasks = {
						key,
						tasks: taskOverview[key],
						studentTasks: calculateStudentTasks(taskOverview[key], key)
					};
				}}
			>
				<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
					<h5 class="mb-0"><Text {key} /></h5>
					<img
						src={`/thumbnails/${keyToThumbnailIdentifier(key).name}-01.${
							keyToThumbnailIdentifier(key).extension
						}`}
						class="self-center mix-blend-multiply"
						alt=""
					/>
				</div>
				<TaskStats completed={taskOverview[key]} taskType={key} />
			</div>
		{/each}
	{:else}
		<button class="p-4 hover:bg-gray-400 self-start" on:click={() => (selectedTasks = undefined)}
			>&lt; <Text key="back" /></button
		>
		<div class="grid grid-cols-2 items-center gap-4 p-2">
			<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
				<h5 class="mb-0"><Text key={selectedTasks.key} /></h5>
				<img
					src={`/thumbnails/${keyToThumbnailIdentifier(selectedTasks.key).name}-01.${
						keyToThumbnailIdentifier(selectedTasks.key).extension
					}`}
					class="self-center mix-blend-multiply"
					alt=""
				/>
			</div>
			<TaskStats completed={selectedTasks.tasks} taskType={selectedTasks.key} />
		</div>

		{#each [...selectedTasks.studentTasks.values()] as { tasks, firstname }}
			<div class="grid items-center gap-8" style="grid-template-columns: 150px 1fr;">
				<p>{firstname}</p>
				<div>
					{#each tasks as { date, color, answers }}
						<ColorDate
							{color}
							{date}
							on:click={() => {
								selectedAnswers = calculateTaskModalData(selectedTasks.key, answers, date);
								selectedName = firstname;
							}}
						/>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<TaskDataModal
	bind:open={modalOpen}
	answers={[selectedAnswers]}
	name={selectedName}
	on:close={() => {
		modalOpen = false;
	}}
/>
