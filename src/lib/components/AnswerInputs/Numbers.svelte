<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	const dispatch = createEventDispatcher<{ answer: { answer: number } }>();

	export let selected: number | string;

	async function selectAnswer(answer: number) {
		selected = answer;
		dispatch('answer', {
			answer
		});
	}
</script>

<div class="relative grid grid-cols-10 gap-4 mb-10">
	{#each numbers as number}
		<button
			on:click|once={() => selectAnswer(number)}
			class="h-16 w-16 border bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-transparent text-4xl font-grund pt-1"
			class:selected={selected === number}
		>
			{number}
		</button>
	{/each}
	<div class="absolute" style="right: -8rem; top: 2.5rem;">
		<button
			on:click|once={() => {
				if (selected === undefined) {
					selected = 0;
					dispatch('answer', {
						answer: 0
					});
				}
			}}
			class="h-16 w-16 border bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-transparent text-4xl"
			class:selected={selected === 0}
		>
			<img src="/star.png" alt="Skip star" class="w-16 cursor-pointer" />
		</button>
	</div>
</div>

<style lang="postcss">
	.selected {
		@apply bg-blue-500 !important;
	}
</style>
