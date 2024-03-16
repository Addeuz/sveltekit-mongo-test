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
	import { calculateTaskModalData, getUrl, TaskModalAnswers } from '$lib/utils';
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
								{ color, date: new Date(complete.createdAt), answers: tasks }
							].sort((a, b) => b.date.getTime() - a.date.getTime());

							studentOverview.set(complete.user_id.username, colors);
						} else {
							studentOverview.set(complete.user_id.username, {
								overall: [color],
								tasks: {
									[key]: [{ color, date: new Date(complete.createdAt), answers: tasks }],
									...colors?.tasks
								},
								firstname: complete.user_id.firstname
							});
						}
					}
				}
			}

			const predictions: Map<string, 'T' | 'F'> = new Map();

			for await (const [user_id, { tasks }] of studentOverview) {
				const formData: InternalPredict[] = [];
				for (const task of taskKeys) {
					const data: TaskColors = tasks[task]
						?.sort((a, b) => b.date.getTime() - a.date.getTime())
						.at(0).color;

					formData.push([task, data === 'green' ? 1 : data === 'yellow' ? 0.5 : 0]);
				}

				const res = await fetch(getUrl(`/api/predict`), {
					method: 'POST',
					body: JSON.stringify(formData)
				});

				const response = await res.json();

				predictions.set(user_id, response.prediction);
			}

			return {
				props: {
					studentOverview,
					predictions
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
	import { session } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import { browser } from '$app/env';
	import { i18n } from '$lib/i18n';
	import printLayout from '$lib/print/layout.html?raw';
	import { getStudentOverviewMarkup } from '$lib/print';
	import TaskDataModal from '$lib/components/overview/TaskDataModal.svelte';
	import type { InternalPredict } from '$lib/tasks/predict';

	export let studentOverview: StudentOverview;
	export let predictions: Map<string, 'T' | 'F'>;

	let iframe: HTMLIFrameElement;
	let selectedAnswers: [Date, TaskModalAnswers][] | undefined = undefined;
	let selectedName: string | undefined = undefined;

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
	$: printMarkup = printLayout.replace(
		'[[replace]]',
		getStudentOverviewMarkup(studentOverview, lang)
	);
	$: modalOpen = selectedAnswers !== undefined;
</script>

<div class="flex justify-end">
	<button
		class="border border-blue-400 p-2 rounded-xl text-blue-400 flex self-center justify-center mb-4 hover:bg-blue-200"
		on:click={() => {
			iframe.contentWindow.print();
		}}
	>
		{i18n['print_overview'][lang]}
	</button>
</div>
<div class="grid gap-2" style="grid-template-columns: 2fr repeat(10, 1fr);">
	<div class="grid grid-cols-2">
		<span>&nbsp;</span><abbr title={i18n['risk_description'][lang]} class="mx-auto"
			><Text key="overall_risk" /></abbr
		>
	</div>
	{#each taskKeys as key}
		<img
			src={`/thumbnails/${keyToThumbnailIdentifier(key).name}-01.${
				keyToThumbnailIdentifier(key).extension
			}`}
			class="self-center mix-blend-multiply"
			alt=""
		/>
	{/each}

	{#each [...studentOverview].sort( ([, a], [, b]) => (a?.firstname ?? '').localeCompare(b.firstname, $session.language.replace('_', '-')) ) as [user_id, { tasks, firstname }]}
		<div class="grid grid-cols-2 items-center">
			<p>{firstname}</p>
			<ColorDate color={predictions.get(user_id) === 'T' ? 'green' : 'red'} />
		</div>
		{#each taskKeys as key}
			<ColorDate
				color={tasks[key]?.[0].color}
				text={tasks[key]?.length.toString()}
				on:click={() => {
					selectedAnswers = tasks[key]?.map(({ date, answers }) =>
						calculateTaskModalData(key, answers, date)
					);
					selectedName = firstname;
				}}
			/>
		{/each}
	{/each}
</div>
<div class="flex flex-col justify-center mt-4 w-full">
	<h4>{i18n['legend'][lang]}</h4>
	<div
		class="grid items-center"
		style="grid-template-columns: 100px 1fr; column-gap: 1rem; row-gap: 0.5rem;"
	>
		<span class="h-10 bg-green-500" />
		<span>{i18n['green_explanation'][lang]}</span>
		<span class="h-10 bg-yellow-500" />
		<span>{i18n['yellow_explanation'][lang]}</span>
		<span class="h-10 bg-red-500" />
		<span>{i18n['red_explanation'][lang]}</span>
	</div>
</div>

<TaskDataModal
	bind:open={modalOpen}
	bind:answers={selectedAnswers}
	name={selectedName}
	on:close={() => {
		modalOpen = false;
		selectedName = undefined;
	}}
/>

<iframe
	bind:this={iframe}
	title="print"
	srcdoc={printMarkup}
	style="width: 850px; height: 1200px; display: none;"
/>
