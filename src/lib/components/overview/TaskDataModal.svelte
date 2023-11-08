<script lang="ts">
	import type { TaskKey } from '$lib/tasks';
	import type { AnswerAttributes } from 'src/global';
	import Modal from '../Modal.svelte';
	import Text from '../Text.svelte';
	import Button from '../Button.svelte';
	import type { TaskModalAnswers } from '$lib/utils';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { createEventDispatcher } from 'svelte';
	import { i18n } from '$lib/i18n';

	export let open: boolean; // bind
	export let answers: [Date, TaskModalAnswers][] | undefined = undefined;
	export let name: string | undefined = undefined;

	const dispatch = createEventDispatcher<{ close: never }>();

	function translateAnswer(answer: string) {
		switch (answer) {
			case 'equal':
				return i18n['equal'][lang];
			case 'skip':
				return i18n['skip'][lang];
			case 'red':
				return i18n['red'][lang];
			case 'blue':
				return i18n['blue'][lang];
			case 'yellow':
				return i18n['yellow'][lang];
			default:
				return answer;
		}
	}

	$: lang = $session?.user?.language ?? (browser && localStorage.getItem('language')) ?? 'en';
</script>

<Modal {open}>
	<h2><Text key="student_answers" /> - {name}</h2>
	<div class="max-h-[600px] overflow-y-scroll">
		{#if answers}
			{#each answers as [date, userAnswers], index}
				<h2>
					{date.toLocaleDateString(lang.replace('_', '-'))}
				</h2>
				<div class="grid grid-cols-3 items-center pr-4">
					<span />
					<span class="font-bold inline-flex justify-end"><Text key="answer" /></span>
					<span class="font-bold inline-flex justify-end"><Text key="right_answer" /></span>
				</div>
				{#each userAnswers.answers as { taskId, rightAnswer, answer, skip }}
					<div
						class="grid grid-cols-3 items-center hover:bg-gray-200 pr-4"
						class:right={rightAnswer === answer}
						class:wrong={rightAnswer !== answer && answer !== 'skip'}
						class:skip
					>
						<img
							src={userAnswers.images[taskId]}
							alt=""
							style="width: 150px; object-fit: cover;	object-position: 25% 25%;"
						/>
						<span class="inline-flex justify-end">{translateAnswer(answer)}</span>
						<span class="inline-flex justify-end">{translateAnswer(rightAnswer)}</span>
					</div>
				{/each}
			{/each}
		{:else}
			<span>This should not be possible</span>
		{/if}
	</div>

	<div class="flex justify-end mt-4">
		<Button
			on:click={() => {
				answers = undefined;
				dispatch('close');
			}}
		>
			<Text key="close" />
		</Button>
	</div>
</Modal>

<style lang="postcss">
	.right {
		@apply text-green-500;
	}
	.skip {
		@apply text-black;
	}
	.wrong {
		@apply text-red-500;
	}
</style>
