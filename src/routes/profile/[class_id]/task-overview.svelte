<script lang="ts" context="module">
	import { keyToThumbnailIdentifier, TaskColors, TaskOverview, thresholds } from '$lib/tasks';
	import { getUrl } from '$lib/utils';
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
	import TaskStats from '$lib/components/overview/TaskStats.svelte';
	import Text from '$lib/components/Text.svelte';
	import { getJSONFromString, ICompletedRun } from '$lib/database/models/completedTasks.models';
	import { TaskKey, taskKeys } from '$lib/tasks';

	export let taskOverview: TaskOverview;

	let selectedTasks:
		| {
				key: TaskKey;
				tasks: ICompletedRun[];
				studentTasks: Map<string, { date: Date; name: string; color: TaskColors }[]>;
		  }
		| undefined = undefined;

	function calculateStudentTasks(
		completed: ICompletedRun[],
		key: TaskKey
	): Map<string, { date: Date; name: string; color: TaskColors }[]> {
		const studentTasks = new Map<string, { date: Date; name: string; color: TaskColors }[]>();
		const threshold = thresholds[key];

		let color: TaskColors = 'green';
		for (const complete of completed) {
			const tasks = getJSONFromString(complete.tasks);
			let correct = 0;
			for (const { answer, rightAnswer } of tasks) {
				if (answer !== 'skip' && answer !== 'star') {
					if (answer === rightAnswer) {
						correct++;
					}
				}
			}
			if (correct <= threshold.red) {
				color = 'red';
			} else if (correct <= threshold.yellow) {
				color = 'yellow';
			} else if (correct <= threshold.green) {
				color = 'green';
			}
			const old = studentTasks.get(complete.user_id.username);
			studentTasks.set(
				complete.user_id.username,
				[
					...(old ?? []),
					{ date: new Date(complete.createdAt), color, name: complete.user_id.firstname }
				].sort((a, b) => a.date.getTime() - b.date.getTime())
			);
		}

		return studentTasks;
	}
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
			>&lt; Tillbaka</button
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

		{#each [...selectedTasks.studentTasks] as [username, tasks]}
			<div class="grid items-center gap-8" style="grid-template-columns: 150px 1fr;">
				<p>{username}</p>
				<div>
					{#each tasks as { date, color }}
						<ColorDate {color} {date} />
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>
