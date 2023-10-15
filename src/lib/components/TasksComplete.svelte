<script lang="ts">
	import { dev } from '$app/env';

	import { page, session } from '$app/stores';

	import { textAndAudio } from '$lib/audio';
	import { getUrl } from '$lib/utils';

	import type { AnswerAttributes } from 'src/global';
	import { onMount } from 'svelte';
	import TextAndAudio from './TextAndAudio.svelte';

	export let completions: AnswerAttributes[];

	onMount(async () => {
		const audio = new Audio('/audio/complete_harp.mp3');
		const res = await fetch('/api/run/complete', {
			method: 'POST',
			body: JSON.stringify({ completions, taskType: $page.params.type }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (res.ok) {
			console.log(await res.json());
		}

		await new Promise((resolve) => {
			audio.play();
			audio.onended = resolve;
		}).then(() => {
			location.replace(getUrl('?completed=true'));
		});
	});
</script>

<div class="h-screen flex items-center justify-center flex-col gap-6">
	<div class="text-2xl flex justify-center">
		<!-- <TextAndAudio
			src={textAndAudio[30].audio[$session.language]}
			text={textAndAudio[30].text[$session.language]}
			autoplay={true}
		/> -->
		<img src="/complete_star.png" id="star" alt="Star with smiley face" class="w-1/2 bounce-7" />
	</div>
	<!-- <div>
		<span>Congratulations, you have completed {$session.user.completed.length} task(s)!</span>
	</div>
	<button
		class="bg-green-400 py-4 px-6 rounded-xl"
		on:click={() => location.replace(getUrl('?completed=true'))}
	>
		Home
	</button> -->
</div>

<style>
	#star {
		align-self: flex-end;
		animation-duration: 2s;
		animation-iteration-count: 1;
		height: 200px;
		margin: 0 auto 0 auto;
		transform-origin: bottom;
		width: 200px;
	}
	.bounce-7 {
		animation-name: bounce-7;
		animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
	}
	@keyframes bounce-7 {
		0% {
			transform: scale(1, 1) translateY(0);
		}
		10% {
			transform: scale(1.1, 0.9) translateY(0);
		}
		30% {
			transform: scale(0.9, 1.1) translateY(-100px);
		}
		50% {
			transform: scale(1.05, 0.95) translateY(0);
		}
		57% {
			transform: scale(1, 1) translateY(-7px);
		}
		64% {
			transform: scale(1, 1) translateY(0);
		}
		100% {
			transform: scale(1, 1) translateY(0);
		}
	}
</style>
