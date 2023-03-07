<script lang="ts">
	import { page, session } from '$app/stores';
	import { textAndAudio } from '$lib/audio';

	import { tutorials } from '$lib/stores/tutorials';
	import TextAndAudio from '$lib/components/TextAndAudio.svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';
	import { selectAudio } from '$lib/audio/selectAudio';

	let selected: number;

	let tutorialIndex = 0;
	let pulse = false;

	async function handleAnswer(event) {
		let audio = selectAudio(21, $session.language);
		selected = event.detail.answer;

		await new Promise((resolve): void => {
			audio.play();
			audio.onended = resolve;
		})
			.then(() => {
				tutorialIndex = tutorialIndex + 1;
			})
			.catch(() => {
				tutorialIndex = tutorialIndex + 1;
			});
	}

	async function handleTutorialEnd() {
		let audio = selectAudio(35, $session.language, true);

		await new Promise((resolve) => {
			audio.play();
			audio.onended = resolve;
		})
			.then(() => {
				$tutorials.tutorial.number = true;
				localStorage.setItem(`${$session.user.username}-number`, 'true');
				pulse = false;
			})
			.catch(() => {
				$tutorials.tutorial.number = true;
				localStorage.setItem(`${$session.user.username}-number`, 'true');
				pulse = false;
			});
	}
</script>

<div class="h-screen flex justify-center items-center flex-col gap-6">
	{#if tutorialIndex === 0}
		<TextAndAudio
			src={textAndAudio[3].audio[$session.language]}
			text={textAndAudio[3].text[$session.language]}
			autoplay={true}
		/>
		<Numbers on:answer={handleAnswer} {selected} />
	{:else if tutorialIndex === 1}
		<TextAndAudio
			src={textAndAudio[4].audio[$session.language]}
			text={textAndAudio[4].text[$session.language]}
			autoplay={true}
		/>
		<TextAndAudio
			src={textAndAudio[5].audio[$session.language]}
			text={textAndAudio[5].text[$session.language]}
		/>
		<img
			class="cursor-pointer"
			class:pulse
			src="/star.png"
			alt="Big star"
			on:click|once={(event) => {
				pulse = true;
				handleAnswer(event);

				var sounds = document.getElementsByTagName('audio');
				for (let i = 0; i < sounds.length; i++) {
					sounds[i].pause();
				}
			}}
		/>
	{:else if tutorialIndex === 2}
		<TextAndAudio
			src={textAndAudio[7].audio[$session.language]}
			text={textAndAudio[7].text[$session.language]}
			autoplay={true}
		/>
		<Numbers on:answer={handleTutorialEnd} {selected} />
	{/if}
</div>

<style lang="postcss">
	.pulse {
		@apply animate-pulse;
	}
</style>
