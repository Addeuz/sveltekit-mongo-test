<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const threeColors = ['blue', 'yellow', 'red'];
	const twoColors = ['blue', 'equal', 'yellow'];

	const dispatch = createEventDispatcher<{ answer: { answer: string } }>();

	export let selected: string | number;

	export let colorType: 'threeColors' | 'twoColors' | 'numbers';
</script>

{#if colorType === 'threeColors'}
	<div class="grid grid-cols-4 gap-4 mb-5 relative">
		{#each threeColors as color}
			<button
				on:click|once={() => {
					dispatch('answer', {
						answer: color
					});
				}}
				class:selected={selected === color}
				class="h-16 w-16 border p-2 bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-gray-300 text-4xl"
			>
				<img class="rounded-3xl" src={`/threeColor/${color}.png`} alt={color} />
			</button>
		{/each}
		<div class="absolute" style="right: -20rem;">
			<button
				on:click|once={() => {
					dispatch('answer', {
						answer: '0'
					});
				}}
				class="h-16 w-16 border bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-gray-300 text-4xl"
				class:selected={selected === 0}
			>
				<img src="/star.png" alt="Skip star" class="w-16 cursor-pointer" />
			</button>
		</div>
	</div>
{:else if colorType === 'twoColors'}
	<div class="grid grid-cols-3 gap-4 mb-5 relative">
		{#each twoColors as color}
			<button
				on:click|once={() => {
					dispatch('answer', {
						answer: color
					});
				}}
				class:selected={selected === color}
				class="h-16 w-16 border p-2 bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-gray-300 text-4xl"
			>
				<img class="rounded-2xl" src={`/twoColors/${color}.png`} alt={color} />
			</button>
		{/each}
		<div class="absolute" style="right: -20rem;">
			<button
				on:click|once={() => {
					dispatch('answer', {
						answer: '0'
					});
				}}
				class="h-16 w-16 border bg-gray-50 border-gray-400 rounded-xl justify-self-end hover:bg-gray-300 text-4xl"
				class:selected={selected === 0}
			>
				<img src="/star.png" alt="Skip star" class="w-16 cursor-pointer" />
			</button>
		</div>
	</div>
{/if}

<style lang="postcss">
	.selected {
		@apply bg-blue-500;
	}
</style>
