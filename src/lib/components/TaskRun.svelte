<script lang="ts">
	import { page } from '$app/stores';

	import { textAndAudio } from '$lib/audio';
	import { tutorials } from '$lib/stores/tutorials';

	import type { AnswerAttributes, TaskAttributes } from 'src/global';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import Colors from './AnswerInputs/Colors.svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';

	export let task: TaskAttributes;
	export let taskIndex: number;

	let pulse = false;
	let taskStartTime: Date;
	let selected: number | string;

	let displayNumbers = false;

	let bigStarClicked = false;

	const audioArray = [27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
	const dispatch = createEventDispatcher();
	let taskAudioPlayed = false;

	let answer: AnswerAttributes;

	async function handleAnswer(star: Boolean, event?: CustomEvent) {
		// getting a random audio
		var sounds = document.getElementsByTagName('audio');
		console.log(sounds);
		for (let i = 0; i < sounds.length; i++) {
			sounds[i].pause();
		}

		let audio = new Audio(textAndAudio[audioArray[(Math.random() * audioArray.length) | 0]].audio);
		const taskEndTime = new Date();
		if (!star) {
			selected = event.detail.answer;
			await new Promise((resolve) => {
				audio.play();
				audio.onended = resolve;
			}).then(() => {
				if (event.detail.answer === 0 || event.detail.answer === '0') {
					// skip
					answer = {
						answer: 'skip',
						rightAnswer: task.rightAnswer,
						skip: true,
						time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000,
						taskId: task.id
					};
				} else {
					answer = {
						answer: event.detail.answer,
						rightAnswer: task.rightAnswer,
						time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000,
						taskId: task.id
					};
				}
				taskStartTime = new Date();
				selected = undefined;
				pulse = false;

				dispatch('taskComplete', {
					answer
				});
			});
		} else {
			await new Promise((resolve) => {
				audio.play();
				audio.onended = resolve;
			}).then(() => {
				answer = {
					answer: 'star',
					time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000
				};
				taskAudioPlayed = false;
				pulse = false;
				taskStartTime = new Date();
				dispatch('taskComplete', {
					answer
				});
			});
			selected = undefined;
			bigStarClicked = false;
		}
	}

	onMount(() => {
		taskStartTime = new Date();
	});

	afterUpdate(() => {
		if (taskIndex % 2 === 0 && !taskAudioPlayed) {
			let audio = document.body.appendChild(new Audio(task.audio));
			taskAudioPlayed = true;
			if (task.audio) {
				audio.play();
			}
		} else {
		}
	});
</script>

{#if $tutorials[$page.params.type].type === 'number'}
	<div class="h-screen flex flex-col items-center justify-start ">
		{#if taskIndex % 2 === 0}
			<img
				on:load={() => {
					displayNumbers = true;
				}}
				class="h-3/4"
				src={task.src}
				alt="Task"
			/>
			{#if displayNumbers}
				<Numbers on:answer={(event) => handleAnswer(false, event)} {selected} />
			{/if}
		{:else}
			<div class="cursor-pointer justify-self-center self-center my-auto">
				<img
					src="/star.png"
					alt="Big star"
					class:pulse
					on:click={() => {
						pulse = true;
						if (!bigStarClicked) {
							bigStarClicked = true;
							handleAnswer(true);
							displayNumbers = false;
						} else {
							console.log('dont click!!!');
						}
					}}
				/>
			</div>
		{/if}
	</div>
{:else if $tutorials[$page.params.type].type === 'color'}
	<div class="h-screen flex flex-col items-center justify-start ">
		{#if taskIndex % 2 === 0}
			<img
				on:load={() => {
					displayNumbers = true;
				}}
				class="h-3/4"
				src={task.src}
				alt="Task"
			/>
			{#if displayNumbers}
				<Colors
					colorType={task.answerType}
					on:answer={(event) => handleAnswer(false, event)}
					{selected}
				/>
			{/if}
		{:else}
			<div class="cursor-pointer justify-self-center self-center my-auto">
				<img
					class:pulse
					src="/star.png"
					alt="Big star"
					on:click={() => {
						pulse = true;
						if (!bigStarClicked) {
							bigStarClicked = true;
							handleAnswer(true);
							displayNumbers = false;
						} else {
							console.log('dont click!!!');
						}
					}}
				/>
			</div>
		{/if}
	</div>
{/if}

<style>
	.pulse {
		/* @apply animate-pulse; */
	}
</style>
