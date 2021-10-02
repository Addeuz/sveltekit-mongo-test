<script lang="ts">
	import { textAndAudio } from '$lib/audio';

	import type { AnswerAttributes, TaskAttributes } from 'src/global';
	import { createEventDispatcher, onMount } from 'svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';

	export let task: TaskAttributes;
	export let taskIndex: number;

	let taskStartTime: Date;
	let selected: number;

	const audioArray = [27, 28, 29];
	const dispatch = createEventDispatcher();

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
				if (event.detail.answer === 0) {
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
			taskStartTime = new Date();
			dispatch('taskComplete', {
				answer
			});
		}
	}

	onMount(() => {
		taskStartTime = new Date();
		if (task.audio) {
			let audio = new Audio(task.audio);
			audio.play();
		}
		console.log('MOUNTING');
	});
</script>

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
