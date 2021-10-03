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

	let taskStartTime: Date;
	let selected: number | string;

	const audioArray = [27, 28, 29];
	const dispatch = createEventDispatcher();
	let taskAudioPlayed = false;

	let answer: AnswerAttributes;

	async function handleAnswer(star: Boolean, event?: CustomEvent) {
		// getting a random audio
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
				console.log(answer);
				taskStartTime = new Date();
				selected = undefined;
				dispatch('taskComplete', {
					answer
				});
			});
		} else {
			answer = {
				answer: 'star',
				time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000
			};
			taskAudioPlayed = false;
			taskStartTime = new Date();
			dispatch('taskComplete', {
				answer
			});
		}
	}

	onMount(() => {
		taskStartTime = new Date();
		console.log('MOUNTING');
	});

	afterUpdate(() => {
		if (taskIndex % 2 === 0 && !taskAudioPlayed) {
			taskAudioPlayed = true;
			console.log('AUDIO');
			if (task.audio) {
				let audio = new Audio(task.audio);
				audio.play();
			}
		} else {
			console.log('NO AUDIO');
		}
	});
</script>

{#if $tutorials[$page.params.type].type === 'number'}
	<div class="h-screen flex flex-col items-center justify-between ">
		{#if taskIndex % 2 === 0}
			<img src={task.src} alt="Task" />
			<Numbers on:answer={(event) => handleAnswer(false, event)} {selected} />
		{:else}
			<div class="cursor-pointer justify-self-center self-center my-auto">
				<img src="/star.png" alt="Big star" on:click={() => handleAnswer(true)} />
			</div>
		{/if}
	</div>
{:else if $tutorials[$page.params.type].type === 'color'}
	<div class="h-screen flex flex-col items-center justify-between ">
		{#if taskIndex % 2 === 0}
			<img class="" src={task.src} alt="Task" />
			<Colors
				colorType={task.answerType}
				on:answer={(event) => handleAnswer(false, event)}
				{selected}
			/>
			<!-- Colors -->
			<!-- <Numbers on:answer={(event) => handleAnswer(false, event)} {selected} /> -->
		{:else}
			<div class="cursor-pointer justify-self-center self-center my-auto">
				<img src="/star.png" alt="Big star" on:click={() => handleAnswer(true)} />
			</div>
		{/if}
	</div>
{/if}
