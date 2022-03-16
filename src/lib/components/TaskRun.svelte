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

	export let task: TaskAttributes;
	export let taskIndex: number;
	export let numberComparison: boolean;

	let pulse = false;
	let taskStartTime: Date;
	let selected: number | string;

	let displayNumbers = false;

	const audioArray = [27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
	const dispatch = createEventDispatcher();
	let taskAudioPlayed = false;

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
			selected = userAnswer;
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
		}
	}

	onMount(() => {
		taskStartTime = new Date();
		console.log(numberComparison);
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

	$: console.log(task);
</script>

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
		<div class="h-screen flex gap-16 items-center justify-center">
			{#if taskIndex % 2 === 0}
				{#each numberComparisonNumbers[task.id].numbers as task}
					<img
						class="cursor-pointer h-1/6"
						src={task.src}
						alt="Number comparison number"
						on:click={() => handleAnswer(false, task.answer.toString())}
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
		@apply animate-pulse;
	}
</style>
