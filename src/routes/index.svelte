<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {};
	};
</script>

<script lang="ts">
	import TextAndAudio from '$lib/components/TextAndAudio.svelte';
	import { textAndAudio } from '$lib/audio';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		if (localStorage.getItem(`${$session.user.username}-color`) === null) {
			localStorage.setItem(`${$session.user.username}-color`, 'true');
		}
		if (localStorage.getItem(`${$session.user.username}-number`) === null) {
			localStorage.setItem(`${$session.user.username}-number`, 'false');
		}
	});
</script>

<TextAndAudio src={textAndAudio[1].audio} text={textAndAudio[1].text} autoplay={true} />

<div class="gap-3 flex flex-col lg:flex-row flex-wrap items-center mx-2 mt-5 mb-5 ">
	<button
		on:click={() => goto('/running/quantities')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('quantities')}
	>
		<img class="rounded-xl mb-3 w-48" src="/quantities/quantities-01.png" alt="Quantities task" />
		<span>Mengen</span>
	</button>
	<button
		on:click={() => goto('/running/numberPattern')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('numberPattern')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="number_pattern/numberpattern-01.png"
			alt="Number pattern task"
		/>
		<span>Zahlenmuster</span>
	</button>
	<button
		on:click={() => goto('/running/numberLine')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('numberLine')}
	>
		<img class="rounded-xl mb-3 w-48" src="number_line/numberline-01.png" alt="Number line tasks" />
		<span>Zahlenstrahl</span>
	</button>
	<button
		on:click={() => goto('/running/completionToTen')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('difference')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/completion_to_ten/completionto10-01.png"
			alt="Difference task"
		/>
		<span>Ergänzen zur 10</span>
	</button>
	<button
		on:click={() => goto('/running/colorPattern')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('colorPattern')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/color_pattern/colorpatterns-01.png"
			alt="Color pattern task"
		/>
		<span>Farbmuster</span>
	</button>
	<button
		on:click={() => goto('/running/hiddenNumber')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('hiddenNumber')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/hidden_number/hiddennumber-01.png"
			alt="Hidden number task"
		/>
		<span>Vorgänger und Nachfolger</span>
	</button>
	<button
		on:click={() => goto('/running/numberComparison')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('numberComparison')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/number_comparison/numbercomparison-01.jpeg"
			alt="Number comparison task"
		/>
		<span>Zahlvergleich</span>
	</button>
	<button
		on:click={() => goto('/running/quantityComparison')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('quantityComparison')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/quantity_comparison/quantitiycomparison-01.png"
			alt="Quantity comparison task"
		/>
		<span>Mengenvergleich</span>
	</button>
	<button
		on:click={() => goto('/running/plus')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('plus')}
	>
		<img class="rounded-xl mb-3 w-48" src="/plus/plus-01.jpeg" alt="Plus task" />
		<span>Plus-Aufgaben</span>
	</button>
	<button
		on:click={() => goto('/running/minus')}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('minus')}
	>
		<img class="rounded-xl mb-3 w-48" src="/minus/minus-01.jpeg" alt="Minus task" />
		<span>Minus-Aufgaben</span>
	</button>
</div>

<style lang="postcss">
	.complete {
		@apply bg-green-400;
	}
</style>
