<script lang="ts">
	import { page } from '$app/stores';
	import { sampleTasks } from '$lib/tasks';
	import type { TaskAttributes } from 'src/global';

	import { onMount } from 'svelte';

	let tasks: TaskAttributes[] = [];

	onMount(() => {
		console.log($page.params.type);
		tasks = sampleTasks[$page.params.type];
		console.log(tasks);
	});
</script>

{#if tasks.length === 0}
	<div class="h-screen flex items-center justify-center flex-col">
		<h1>Not yet implemented</h1>
		<a href="/">Go back</a>
	</div>
{:else}
	<h1>Run tasks</h1>
{/if}
