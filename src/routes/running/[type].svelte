<script lang="ts">
	import { page, session } from '$app/stores';
	import { sampleTasks } from '$lib/tasks';
	import { tutorials } from '$lib/stores/tutorials';
	import type { AnswerAttributes, TaskAttributes } from 'src/global';
	import { onMount } from 'svelte';
	import NumberTutorial from '$lib/components/NumberTutorial.svelte';
	import TaskRun from '$lib/components/TaskRun.svelte';
	import TasksComplete from '$lib/components/TasksComplete.svelte';
	import { dev } from '$app/env';
	import { getUrl } from '$lib/utils';

	let tasks: TaskAttributes[] = [];

	let taskIndex = 0;
	let allTaskComplete = false;

	let completions: AnswerAttributes[] = [];

	let hasSeenTutorial: string;

	async function handleTaskAnswer(event) {
		completions.push(event.detail.answer);

		// Completions include stars and skips so we divide by 2, (18 tasks = 36 completions)
		// Then we do tasks.length - 0.5 because we don't want the extra star in the end.
		if (completions.length / 2 === tasks.length - 0.5) {
			allTaskComplete = true;
			await fetch('/api/run/complete', {
				method: 'POST',
				body: JSON.stringify({ completions, taskType: $page.params.type }),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(() => {
				// location.replace(getUrl('?completed=true'));
			});
		} else {
			taskIndex++;
		}
	}
	onMount(() => {
		tasks = sampleTasks[$page.params.type];
		hasSeenTutorial = localStorage.getItem(`${$session.user.username}-number`);
	});

	$: hasSeenTutorial = $tutorials.tutorial.number.toString();
</script>

{#if $tutorials[$page.params.type].type === 'number'}
	{#if tasks.length === 0}
		<div class="h-screen flex items-center justify-center flex-col">
			<h1>Not yet implemented</h1>
			<a href="/">Go back</a>
		</div>
	{:else if hasSeenTutorial === 'false'}
		<NumberTutorial />
	{:else if allTaskComplete}
		<TasksComplete />
	{:else}
		<!-- If taskIndex is even it means that there should be a real task not a star -->
		<TaskRun
			numberComparison={$page.params.type === 'numberComparison'}
			task={tasks[taskIndex / 2]}
			on:taskComplete={handleTaskAnswer}
			{taskIndex}
		/>
	{/if}
{:else if $tutorials[$page.params.type].type === 'color'}
	{#if tasks.length === 0}
		<div class="h-screen flex items-center justify-center flex-col">
			<h1>Not yet implemented</h1>
			<a href="/">Go back</a>
		</div>
	{:else if !$tutorials.tutorial.color}
		<!-- Color tutorial -->
		<!-- <NumberTutorial /> -->
	{:else if allTaskComplete}
		<TasksComplete />
	{:else}
		<!-- If taskIndex is even it means that there should be a real task not a star -->
		<TaskRun
			numberComparison={$page.params.type === 'numberComparison'}
			task={tasks[taskIndex / 2]}
			on:taskComplete={handleTaskAnswer}
			{taskIndex}
		/>
	{/if}
{/if}
