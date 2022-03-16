<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	const dispatch = createEventDispatcher<{ answer: { answer: number } }>();

	export let selected: number | string;

	async function selectAnswer(answer: number) {
		dispatch('answer', {
			answer
		});
	}

	onMount(() => {});
</script>

<div class="grid grid-cols-4 gap-4 mb-10">
	<div />
	<div class="grid grid-cols-10 col-span-2 gap-4">
		{#each numbers as number}
			<button
				on:click={() => selectAnswer(number)}
				class="h-16 w-16 border bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-transparent text-4xl"
				class:selected={selected === number}
			>
				{number}
			</button>
		{/each}
	</div>
	<div class="self-center justify-self-center">
		<button
			on:click={() => {
				dispatch('answer', {
					answer: 0
				});
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
		@apply bg-blue-500;
	}
</style>
