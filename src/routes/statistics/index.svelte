<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const res = await fetch(getUrl('/api/statistics'));

		const data = await res.json();
		console.log(data);

		return {
			props: {
				runs: [...data.completedRuns]
			}
		};
	};
</script>

<script lang="ts">
	import type { ICompletedRun } from '$lib/database/models/completedTasks.models';
	import { onMount } from 'svelte';
	import { getUrl } from '$lib/utils';

	export let runs: ICompletedRun[];

	onMount(() => {
		console.log(runs);
	});
</script>

<h1>Statistics</h1>
{#each runs as run}
	<p>{run.totalTime}</p>
{/each}
