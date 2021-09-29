<script lang="ts">
	import { page } from '$app/stores';
	import { sampleTasks } from '$lib/tasks';
	import { tutorials } from '$lib/stores/tutorials';
	import type { AnswerAttributes, TaskAttributes } from 'src/global';

	import { onMount } from 'svelte';
	import NumberTutorial from '$lib/components/NumberTutorial.svelte';
	import TaskRun from '$lib/components/TaskRun.svelte';
	import TasksComplete from '$lib/components/TasksComplete.svelte';

	let tasks: TaskAttributes[] = [];

	let taskIndex = 0;
	let allTaskComplete = false;

	let completions: AnswerAttributes[] = [];

	function handleTaskAnswer(event) {
		completions.push(event.detail.answer);
		if (taskIndex !== tasks.length - 1) {
			taskIndex++;
		} else {
			console.log('YAAAY');
			console.log(completions);
			allTaskComplete = true;
		}
	}
	onMount(() => {
		console.log($page.params.type);
		tasks = sampleTasks[$page.params.type];
		console.log(tasks);
		console.log($tutorials[$page.params.type]);
	});
</script>

{#if tasks.length === 0}
	<div class="h-screen flex items-center justify-center flex-col">
		<h1>Not yet implemented</h1>
		<a href="/">Go back</a>
	</div>
{:else if !$tutorials[$page.params.type].seen}
	<NumberTutorial />
{:else if allTaskComplete}
	<TasksComplete {completions} />
{:else}
	<TaskRun task={tasks[taskIndex]} on:taskComplete={handleTaskAnswer} />
{/if}
