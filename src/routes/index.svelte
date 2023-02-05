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
	import { page, session } from '$app/stores';
	import { onMount } from 'svelte';
	import { getCompletedSound } from '$lib/audio/getCompletedSound';
	import Text from '$lib/components/Text.svelte';

	let completed: string[];
	let soundIndex = 1;

	onMount(() => {
		if (localStorage.getItem(`${$session.user.username}-color`) === null) {
			localStorage.setItem(`${$session.user.username}-color`, 'true');
		}
		if (localStorage.getItem(`${$session.user.username}-number`) === null) {
			localStorage.setItem(`${$session.user.username}-number`, 'false');
		}

		completed = $session.user.completed.filter(
			(item, index) => $session.user.completed.indexOf(item) === index
		);

		if ($page.query.get('completed') === 'true') {
			soundIndex = getCompletedSound(completed.length);
		}
	});

	$: console.log($session.language);
</script>

<TextAndAudio
	src={textAndAudio[soundIndex].audio[$session.language]}
	text={textAndAudio[soundIndex].text[$session.language]}
	autoplay={true}
/>

<div
	class="gap-3 flex flex-col lg:flex-row flex-wrap items-center mx-2 mt-5 mb-5 font-grund text-2xl"
>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('quantities')) {
				goto('/running/quantities');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('quantities')}
		class:not-completed={!$session.user.completed.includes('quantities')}
	>
		<img class="rounded-xl mb-3 w-48" src="/quantities/quantities-01.png" alt="Quantities task" />
		<!-- {#if $session.language === 'de'}
			<span>Mengen</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Ποσότητες</span>
		{/if} -->
		<Text key="quantities" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('numberPattern')) {
				goto('/running/numberPattern');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('numberPattern')}
		class:not-completed={!$session.user.completed.includes('numberPattern')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="number_pattern/numberpattern-01.png"
			alt="Number pattern task"
		/>
		<!-- {#if $session.language === 'de'}
			<span>Zahlenmuster</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Μοτίβα με αριθμούς</span>
		{/if} -->
		<Text key="number_pattern" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('numberLine')) {
				goto('/running/numberLine');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('numberLine')}
		class:not-completed={!$session.user.completed.includes('numberLine')}
	>
		<img class="rounded-xl mb-3 w-48" src="number_line/numberline-01.png" alt="Number line tasks" />
		<!-- {#if $session.language === 'de'}
			<span>Zahlenstrahl</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Αριθμητική γραμμή</span>
		{/if} -->
		<Text key="number_line" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('completionToTen')) {
				goto('/running/completionToTen');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('completionToTen')}
		class:not-completed={!$session.user.completed.includes('completionToTen')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/completion_to_ten/completionto10-01.png"
			alt="Difference task"
		/>
		<Text key="completion_to_ten" />

		<!-- {#if $session.language === 'de'}
			<span>Ergänzen zur 10</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Συμπλήρωση μέχρι το 10</span>
		{/if} -->
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('colorPattern')) {
				goto('/running/colorPattern');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('colorPattern')}
		class:not-completed={!$session.user.completed.includes('colorPattern')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/color_pattern/colorpatterns-01.png"
			alt="Color pattern task"
		/>
		<!-- {#if $session.language === 'de'}
			<span>Farbmuster</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Μοτίβα με χρώματα</span>
		{/if} -->
		<Text key="color_pattern" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('hiddenNumber')) {
				goto('/running/hiddenNumber');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('hiddenNumber')}
		class:not-completed={!$session.user.completed.includes('hiddenNumber')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/hidden_number/hiddennumber-01.png"
			alt="Hidden number task"
		/>

		<!-- {#if $session.language === 'de'}
			<span>Vorgänger und Nachfolger</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Προηγούμενος και επόμενος αριθμός</span>
		{/if} -->
		<Text key="hidden_number" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('numberComparison')) {
				goto('/running/numberComparison');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('numberComparison')}
		class:not-completed={!$session.user.completed.includes('numberComparison')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/number_comparison/numbercomparison-01.jpeg"
			alt="Number comparison task"
		/>
		<!-- {#if $session.language === 'de'}
			<span>Zahlvergleich</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Σύγκριση αριθμών</span>
		{/if} -->
		<Text key="number_comparison" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('quantityComparison')) {
				goto('/running/quantityComparison');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('quantityComparison')}
		class:not-completed={!$session.user.completed.includes('quantityComparison')}
	>
		<img
			class="rounded-xl mb-3 w-48"
			src="/quantity_comparison/quantitiycomparison-01.png"
			alt="Quantity comparison task"
		/>
		<!-- {#if $session.language === 'de'}
			<span>Mengenvergleich</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Σύγκριση ποσοτήτων</span>
		{/if} -->
		<Text key="quantity_comparison" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('plus')) {
				goto('/running/plus');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('plus')}
		class:not-completed={!$session.user.completed.includes('plus')}
	>
		<img class="rounded-xl mb-3 w-48" src="/plus/plus-01.jpeg" alt="Plus task" />
		<!-- {#if $session.language === 'de'}
			<span>Plus-Aufgaben</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Πρόσθεση</span>
		{/if} -->
		<Text key="plus" />
	</button>
	<button
		on:click={() => {
			if (!$session.user.completed.includes('minus')) {
				goto('/running/minus');
			}
		}}
		class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
		class:complete={$session.user.completed.includes('minus')}
		class:not-completed={!$session.user.completed.includes('minus')}
	>
		<img class="rounded-xl mb-3 w-48" src="/minus/minus-01.jpeg" alt="Minus task" />
		<!-- {#if $session.language === 'de'}
			<span>Minus-Aufgaben</span>
		{:else if $session.language === 'el_cy'}
			<span class="font-sans">Αφαίρεση</span>
		{/if} -->
		<Text key="minus" />
	</button>
</div>

<style lang="postcss">
	.complete {
		@apply bg-green-400;
		@apply text-gray-500;
		@apply cursor-default;
	}

	.not-completed {
		@apply cursor-pointer;
	}
</style>
