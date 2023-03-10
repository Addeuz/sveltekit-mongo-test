<script lang="ts" context="module">
	import { getJSONFromString } from '$lib/database/models/completedTasks.models';
	import {
		isTaskKey,
		keyToThumbnailIdentifier,
		StudentOverview,
		TaskColors,
		TaskOverview,
		thresholds
	} from '$lib/tasks';
	import { getUrl } from '$lib/utils';
	import type { Load } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	function getColorAverage(colors: TaskColors[]): TaskColors {
		let green = 0;
		let yellow = 0;
		let red = 0;

		for (const color of colors) {
			if (color === 'green') {
				green++;
			}
			if (color === 'yellow') {
				yellow++;
			}
			if (color === 'red') {
				red++;
			}
		}

		const total = green + yellow + red;
		const divider = total / 3;

		return 'green';
	}

	export const load: Load = async ({ page }) => {
		const res = await fetch(getUrl(`/api/classes/${page.params.class_id}/task-overview`));

		if (res.ok) {
			const { taskOverview } = (await res.json()) as { taskOverview: TaskOverview };
			const studentOverview: StudentOverview = new Map();

			for (const [key, completed] of Object.entries(taskOverview)) {
				if (isTaskKey(key)) {
					const threshold = thresholds[key];
					for (const complete of completed) {
						const colors = studentOverview.get(complete.user_id.username);
						const tasks = getJSONFromString(complete.tasks);
						let correct = 0;
						let color: TaskColors = 'green';
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

						if (colors !== undefined) {
							colors.overall = [...(colors?.overall ?? []), color];
							colors.tasks[key] = [
								...(colors?.tasks[key] ?? []),
								{ color, date: new Date(complete.createdAt) }
							].sort((a, b) => b.date.getTime() - a.date.getTime());

							studentOverview.set(complete.user_id.username, colors);
						} else {
							studentOverview.set(complete.user_id.username, {
								overall: [color],
								tasks: {
									[key]: [{ color, date: new Date(complete.createdAt) }],
									...colors?.tasks
								},
								firstname: complete.user_id.firstname
							});
						}
					}
				}
			}

			return {
				props: {
					studentOverview
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
	import { taskKeys } from '$lib/tasks';

	export let studentOverview: StudentOverview;
</script>

<div class="grid gap-2" style="grid-template-columns: 2fr repeat(10, 1fr);">
	<div class="grid grid-cols-2"><span>&nbsp;</span><span class="mx-auto">Overall</span></div>
	{#each taskKeys as key}
		<img
			src={`/thumbnails/${keyToThumbnailIdentifier(key).name}-01.${
				keyToThumbnailIdentifier(key).extension
			}`}
			class="self-center mix-blend-multiply"
			alt=""
		/>
	{/each}

	{#each [...studentOverview.values()] as { overall, tasks, firstname }}
		<div class="grid grid-cols-2 items-center">
			<p>{firstname}</p>
			<ColorDate color={overall?.[0]} />
		</div>
		{#each taskKeys as key}
			<ColorDate color={tasks[key]?.[0].color} text={tasks[key]?.length.toString()} />
		{/each}
	{/each}
</div>
