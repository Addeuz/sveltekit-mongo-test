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
	import type { TaskKey } from '$lib/tasks';

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

	$: userTasks = $session.user.tasks as TaskKey[];
</script>

<TextAndAudio
	src={textAndAudio[soundIndex].audio[$session.language]}
	text={textAndAudio[soundIndex].text[$session.language]}
	autoplay={true}
/>

{#if userTasks.length === 0}
	<div class="flex justify-center mt-16">
		<h4>
			<Text key="no_selected_tasks" />
		</h4>
	</div>
{:else}
	<div
		class="gap-3 flex flex-col lg:flex-row flex-wrap items-center mx-2 mt-5 mb-5 font-grund text-2xl"
	>
		{#if userTasks.includes('quantities')}
			<button
				on:click={() => {
					goto('/running/quantities');
				}}
				class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
				class:complete={$session.user.completed.includes('quantities')}
				class:not-completed={!$session.user.completed.includes('quantities')}
			>
				<img
					class="rounded-xl mb-3 w-48"
					src="/quantities/quantities-01.png"
					alt="Quantities task"
				/>
				<Text key="quantities" />
			</button>
		{/if}
		{#if userTasks.includes('numberPattern')}
			<button
				on:click={() => {
					goto('/running/numberPattern');
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
				<Text key="numberPattern" />
			</button>
		{/if}
		{#if userTasks.includes('numberLine')}
			<button
				on:click={() => {
					goto('/running/numberLine');
				}}
				class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
				class:complete={$session.user.completed.includes('numberLine')}
				class:not-completed={!$session.user.completed.includes('numberLine')}
			>
				<img
					class="rounded-xl mb-3 w-48"
					src="number_line/numberline-01.png"
					alt="Number line tasks"
				/>
				<Text key="numberLine" />
			</button>
		{/if}
		{#if userTasks.includes('completionToTen')}
			<button
				on:click={() => {
					goto('/running/completionToTen');
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
				<Text key="completionToTen" />
			</button>
		{/if}
		{#if userTasks.includes('colorPattern')}
			<button
				on:click={() => {
					goto('/running/colorPattern');
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
				<Text key="colorPattern" />
			</button>
		{/if}
		{#if userTasks.includes('hiddenNumber')}
			<button
				on:click={() => {
					goto('/running/hiddenNumber');
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
				<Text key="hiddenNumber" />
			</button>
		{/if}
		{#if userTasks.includes('numberComparison')}
			<button
				on:click={() => {
					goto('/running/numberComparison');
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
				<Text key="numberComparison" />
			</button>
		{/if}
		{#if userTasks.includes('quantityComparison')}
			<button
				on:click={() => {
					goto('/running/quantityComparison');
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
				<Text key="quantityComparison" />
			</button>
		{/if}
		{#if userTasks.includes('plus')}
			<button
				on:click={() => {
					goto('/running/plus');
				}}
				class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
				class:complete={$session.user.completed.includes('plus')}
				class:not-completed={!$session.user.completed.includes('plus')}
			>
				<img class="rounded-xl mb-3 w-48" src="/plus/plus-01.jpeg" alt="Plus task" />
				<Text key="plus" />
			</button>
		{/if}
		{#if userTasks.includes('minus')}
			<button
				on:click={() => {
					goto('/running/minus');
				}}
				class="flex flex-col items-center justify-center bg-gray-200 hover:bg-gray-300 w-60 h-52 rounded-xl"
				class:complete={$session.user.completed.includes('minus')}
				class:not-completed={!$session.user.completed.includes('minus')}
			>
				<img class="rounded-xl mb-3 w-48" src="/minus/minus-01.jpeg" alt="Minus task" />
				<Text key="minus" />
			</button>
		{/if}
	</div>
{/if}

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
