<script lang="ts" context="module">
	import { getJSONFromString } from '$lib/database/models/completedTasks.models';
	import {
		isTaskKey,
		keyToThumbnailIdentifier,
		StudentOverview,
		TaskColors,
		TaskKey,
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

			const jsonData: { [key: string]: Record<TaskKey, number> } = {};
			for await (const [user_id, { tasks }] of studentOverview) {
				const scores: Record<TaskKey, number> = {
					quantities: 0,
					quantityComparison: 0,
					numberComparison: 0,
					colorPattern: 0,
					numberPattern: 0,
					hiddenNumber: 0,
					numberLine: 0,
					completionToTen: 0,
					plus: 0,
					minus: 0
				};
				for (const task of taskKeys) {
					const data: TaskColors = tasks[task]
						?.sort((a, b) => b.date.getTime() - a.date.getTime())
						.at(0).color;

					scores[task] = data === 'green' ? 1 : data === 'yellow' ? 0.5 : 0;
				}
				jsonData[user_id] = scores;
			}

			const predictionsPromise = fetch(getUrl(`/api/predict`), {
				method: 'POST',
				body: JSON.stringify(jsonData)
			})
				.then((res) => res.json())
				.then((res) => res.predictions);

			return {
				props: {
					studentOverview,
					predictionsPromise: predictionsPromise
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
	export let predictionsPromise: Promise<{
		[key: string]: 'T' | 'F';
	}>;

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
			{#await predictionsPromise}
				<div role="status" class="flex justify-center">
					<svg
						aria-hidden="true"
						class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span class="sr-only">Loading...</span>
				</div>
			{:then predictions}
				<ColorDate color={predictions[user_id] === 'T' ? 'green' : 'red'} />
			{/await}
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
