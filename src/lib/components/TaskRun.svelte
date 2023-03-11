<script lang="ts">
	import { page, session } from '$app/stores';

	import { textAndAudio } from '$lib/audio';
	import { selectAudio } from '$lib/audio/selectAudio';
	import { tutorials } from '$lib/stores/tutorials';
	import { numberComparisonNumbers } from '$lib/tasks';

	import type { AnswerAttributes, TaskAttributes } from 'src/global';
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import Colors from './AnswerInputs/Colors.svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';
	import VideoModal from './VideoModal.svelte';

	export let task: TaskAttributes;
	export let taskIndex: number;
	export let numberComparison: boolean;

	let pulse = false;
	let taskStartTime: Date;
	let selected: number | string;

	let displayNumbers = false;

	const dispatch = createEventDispatcher();
	let taskAudioPlayed = false;
	let taskVideoPlayed = false;
	let videoOpen = false;
	let videoUrl = undefined;

	let answer: AnswerAttributes;

	async function handleAnswer(star: Boolean, userAnswer?: string) {
		// getting a random audio
		var sounds = document.getElementsByTagName('audio');
		console.log(sounds);
		for (let i = 0; i < sounds.length; i++) {
			sounds[i].pause();
		}

		let audio = selectAudio(0, $session.language, true);
		const taskEndTime = new Date();
		if (!star) {
			if (isNaN(parseInt(userAnswer))) {
				console.log('janne');
				selected = userAnswer;
				console.log(selected);
			} else {
				selected = parseInt(userAnswer);
			}
			if (userAnswer === '0') {
				// skip, play no sound
				answer = {
					answer: 'skip',
					rightAnswer: task.rightAnswer,
					skip: true,
					time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000,
					taskId: task.id
				};

				dispatch('taskComplete', {
					answer
				});
			} else {
				await new Promise((resolve) => {
					audio.play();
					audio.onended = resolve;
				})
					.then(() => {
						answer = {
							answer: userAnswer,
							rightAnswer: task.rightAnswer,
							time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000,
							taskId: task.id
						};
						taskStartTime = new Date();
						selected = undefined;
						pulse = false;

						dispatch('taskComplete', {
							answer
						});
					})
					.catch(() => {
						answer = {
							answer: userAnswer,
							rightAnswer: task.rightAnswer,
							time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000,
							taskId: task.id
						};
						taskStartTime = new Date();
						selected = undefined;
						pulse = false;

						dispatch('taskComplete', {
							answer
						});
					});
			}
		} else {
			setTimeout(() => {
				answer = {
					answer: 'star',
					time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000
				};
				taskAudioPlayed = false;
				taskVideoPlayed = false;
				pulse = false;
				taskStartTime = new Date();
				dispatch('taskComplete', {
					answer
				});
				selected = undefined;
			}, 1000);
		}
	}

	function playVideo() {
		videoOpen = true;
		videoUrl = task.video[$session.language];
	}

	onMount(() => {
		if (task.video) {
			playVideo();
		} else {
			taskStartTime = new Date();
		}
	});

	afterUpdate(() => {
		if (!taskVideoPlayed && task?.video) {
			playVideo();
		}
		if (taskIndex % 2 === 0 && !taskAudioPlayed && !task.video && task.audio) {
			let audio = document.body.appendChild(new Audio(task.audio[$session.language]));
			taskAudioPlayed = true;
			if (task.audio) {
				audio.play();
			}
		}
	});
</script>

<VideoModal
	bind:open={videoOpen}
	{videoUrl}
	on:ended={() => {
		videoOpen = false;
		taskVideoPlayed = true;
		taskStartTime = new Date();
		let audio = document.body.appendChild(new Audio(task.audio[$session.language]));
		taskAudioPlayed = true;
		if (task.audio[$session.language]) {
			audio.play();
		}
	}}
/>
{#if $tutorials[$page.params.type].type === 'number'}
	{#if !numberComparison}
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
					<Numbers
						on:answer={(event) => handleAnswer(false, event.detail.answer.toString())}
						{selected}
					/>
				{/if}
			{:else}
				<div class="cursor-pointer justify-self-center self-center my-auto">
					<img
						src="/star.png"
						alt="Big star"
						class:pulse
						on:click|once={() => {
							pulse = true;
							handleAnswer(true);
							displayNumbers = false;
						}}
					/>
				</div>
			{/if}
		</div>
	{:else}
		<div class="h-screen flex gap-72 items-center justify-center">
			{#if taskIndex % 2 === 0}
				<!-- Divide taskIndex by 2 because there are stars that don't count -->
				{#each numberComparisonNumbers[taskIndex / 2].numbers as task}
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="relative cursor-pointer after:content-[''] after:block after:absolute after:p-40 after:-top-20 after:-left-20"
						style={`margin-top: ${task.margin}rem`}
						on:click|once={() => handleAnswer(false, task.answer.toString())}
					>
						<img
							on:load={() => {
								displayNumbers = true;
							}}
							class="h-[70%] w-[70%]"
							src={task.src}
							alt="Number comparison number"
						/>
					</a>
				{/each}
			{:else}
				<div class="cursor-pointer justify-self-center self-center my-auto">
					<img
						src="/star.png"
						alt="Big star"
						class:pulse
						on:click|once={() => {
							pulse = true;
							handleAnswer(true);
							displayNumbers = false;
						}}
					/>
				</div>
			{/if}
		</div>
	{/if}
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
					on:answer={(event) => handleAnswer(false, event.detail.answer)}
					{selected}
				/>
			{/if}
		{:else}
			<div class="cursor-pointer justify-self-center self-center my-auto">
				<img
					class:pulse
					src="/star.png"
					alt="Big star"
					on:click|once={() => {
						pulse = true;
						handleAnswer(true);
						displayNumbers = false;
					}}
				/>
			</div>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.pulse {
		@apply animate-fast-pulse;
	}

	/* .comparison-number {
		@apply cursor-pointer;
		@apply relative;
	}

	.comparison-number::after {
		@apply block;
		@apply bg-blue-400;
		@apply p-40;
		@apply absolute;
		@apply cursor-pointer;
		@apply -top-20;
		@apply -left-20;
		content: 'apa';
	} */
</style>
