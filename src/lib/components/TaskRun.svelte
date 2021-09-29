<script lang="ts">
	import type { TaskAttributes } from 'src/global';
	import { createEventDispatcher, onMount } from 'svelte';
	import Numbers from './AnswerInputs/Numbers.svelte';

	export let task: TaskAttributes;

	let taskStartTime: Date;

	const dispatch = createEventDispatcher();

	function handleAnswer(event) {
		const taskEndTime = new Date();
		console.log('totalTime', taskEndTime.getTime() - taskStartTime.getTime());

		const answer = {
			answer: event.detail.answer,
			rightAnswer: task.rightAnswer,
			time: (taskEndTime.getTime() - taskStartTime.getTime()) / 1000
		};

		console.log(answer);

		dispatch('taskComplete', {
			answer
		});

		taskStartTime = taskEndTime;
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
	<img src={task.src} alt="Task" />
	<Numbers on:answer={handleAnswer} />
</div>
