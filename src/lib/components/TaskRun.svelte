<script lang="ts">
	import { page } from '$app/stores';

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

		let audio = selectAudio(0, true);
		const taskEndTime = new Date();
		if (!star) {
			if (isNaN(parseInt(userAnswer))) {
				console.log('janne');
				selected = userAnswer;
				console.log(selected);
			} else {
				selected = parseInt(userAnswer);
			}
			await new Promise((resolve) => {
				audio.play();
				audio.onended = resolve;
			}).then(() => {
				if (userAnswer === '0') {
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
						answer: userAnswer,
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
		videoUrl = task.video;
	}

	onMount(() => {
		if (task.video) {
			playVideo();
		} else {
			taskStartTime = new Date();
		}
	});

	afterUpdate(() => {
		console.log(taskVideoPlayed);
		if (!taskVideoPlayed && task?.video !== undefined) {
			playVideo();
		}
		if (taskIndex % 2 === 0 && !taskAudioPlayed && !task.video) {
			let audio = document.body.appendChild(new Audio(task.audio));
			taskAudioPlayed = true;
			if (task.audio) {
				audio.play();
			}
		}
	});

	$: console.log(task);
</script>

<VideoModal
	bind:open={videoOpen}
	{videoUrl}
	on:ended={() => {
		videoOpen = false;
		taskVideoPlayed = true;
		taskStartTime = new Date();
		let audio = document.body.appendChild(new Audio(task.audio));
		taskAudioPlayed = true;
		if (task.audio) {
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
				{#each numberComparisonNumbers[task.id].numbers as task}
					<img
						on:load={() => {
							displayNumbers = true;
						}}
						class="cursor-pointer h-1/6"
						style={`margin-top: ${task.margin}rem`}
						src={task.src}
						alt="Number comparison number"
						on:click|once={() => handleAnswer(false, task.answer.toString())}
					/>
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
</style>
