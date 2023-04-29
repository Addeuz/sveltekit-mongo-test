<script lang="ts">
	import { browser } from '$app/env';
	import { session } from '$app/stores';
	import { getJSONFromString, ICompletedRun } from '$lib/database/models/completedTasks.models';
	import { i18n } from '$lib/i18n';
	import { TaskKey, Threshold, thresholds } from '$lib/tasks';
	import { onMount } from 'svelte';

	export let completed: ICompletedRun[];
	export let taskType: TaskKey;

	let data: Threshold = {
		red: 0,
		yellow: 0,
		green: 0
	};

	onMount(() => {
		const threshold = thresholds[taskType];
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
				data.red += 1;
			} else if (correct <= threshold.yellow) {
				data.yellow += 1;
			} else if (correct <= threshold.green) {
				data.green += 1;
			}
		}
		console.log(taskType, threshold, data);
	});

	$: total = data.red + data.yellow + data.green;
	$: red = data.red / total;
	$: yellow = data.yellow / total;
	$: green = data.green / total;

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

{#if total > 0}
	<div class="grid" style={`grid-template-columns: ${red * 100}% ${yellow * 100}% ${green * 100}%`}>
		<span class="bg-red-500 h-[40px]" title={`${data.red} red run${data.red !== 1 ? 's' : ''}`} />
		<span
			class="bg-yellow-500 h-[40px]"
			title={`${data.yellow} yellow run${data.yellow !== 1 ? 's' : ''}`}
		/>
		<span
			class="bg-green-500 h-[40px]"
			title={`${data.green} green run${data.green !== 1 ? 's' : ''}`}
		/>
	</div>
{:else}
	{i18n['no_students_with_tasks'][lang]}
{/if}
