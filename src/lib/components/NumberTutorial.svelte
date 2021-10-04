<script lang="ts">
	import { page } from '$app/stores';
	import { textAndAudio } from '$lib/audio';

	import { tutorials } from '$lib/stores/tutorials';
	import TextAndAudio from '$lib/components/TextAndAudio.svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';

	let selected: number;

	let tutorialIndex = 0;
	let pulse = false;

	async function handleAnswer(event) {
		let audio = new Audio(textAndAudio[27].audio);
		selected = event.detail.answer;

		// This needs more stuff, like the stars and stuff

		await new Promise((resolve) => {
			audio.play();
			audio.onended = resolve;
		}).then(() => {
			tutorialIndex = tutorialIndex + 1;
		});
	}

	async function handleTutorialEnd() {
		let audio = new Audio(textAndAudio[28].audio);

		await new Promise((resolve) => {
			audio.play();
			audio.onended = resolve;
		}).then(() => {
			$tutorials.tutorial.number = true;
			pulse = false;
		});
	}
</script>

<div class="h-screen flex justify-center items-center flex-col gap-6">
	{#if tutorialIndex === 0}
		<TextAndAudio src={textAndAudio[3].audio} text={textAndAudio[3].text} autoplay={true} />
		<Numbers on:answer={handleAnswer} {selected} />
	{:else if tutorialIndex === 1}
		<TextAndAudio src={textAndAudio[4].audio} text={textAndAudio[4].text} autoplay={true} />
		<TextAndAudio src={textAndAudio[5].audio} text={textAndAudio[5].text} />
		<img
			class="cursor-pointer"
			class:pulse
			src="/star.png"
			alt="Big star"
			on:click={() => {
				pulse = true;
				handleTutorialEnd();
			}}
		/>
	{/if}
</div>

<style>
	.pulse {
		@apply animate-pulse;
	}
</style>
