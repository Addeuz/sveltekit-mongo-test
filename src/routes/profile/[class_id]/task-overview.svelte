<script lang="ts" context="module">
	import {
		keyToThumbnailIdentifier,
		sampleTasks,
		TaskColors,
		TaskOverview,
		thresholds
	} from '$lib/tasks';
	import { getUrl } from '$lib/utils';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page }) => {
		const res = await fetch(getUrl(`/api/classes/${page.params.class_id}/task-overview`));

		if (res.ok) {
			const data = await res.json();
			return {
				props: {
					taskOverview: data.taskOverview
				}
			};
		}

		return {
			status: 301,
			redirect: '/profile'
		};
	};
</script>

<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import ColorDate from '$lib/components/overview/ColorDate.svelte';
	import TaskStats from '$lib/components/overview/TaskStats.svelte';
	import Text from '$lib/components/Text.svelte';
	import { getJSONFromString, ICompletedRun } from '$lib/database/models/completedTasks.models';
	import { TaskKey, taskKeys } from '$lib/tasks';
	import type { AnswerAttributes, TaskAttributes } from 'src/global';
	import Button from '$lib/components/Button.svelte';

	export let taskOverview: TaskOverview;

	let selectedTasks:
		| {
				key: TaskKey;
				tasks: ICompletedRun[];
				studentTasks: Map<
					string,
					{
						tasks: { date: Date; name: string; color: TaskColors; answers: AnswerAttributes[] }[];
						firstname: string;
					}
				>;
		  }
		| undefined = undefined;

	let selectedAnswers:
		| {
				type: TaskKey;
				answers: AnswerAttributes[];
				images: { [key: string]: string };
		  }
		| undefined = undefined;

	function calculateStudentTasks(
		completed: ICompletedRun[],
		key: TaskKey
	): Map<
		string,
		{
			tasks: { date: Date; name: string; color: TaskColors; answers: AnswerAttributes[] }[];
			firstname: string;
		}
	> {
		const studentTasks = new Map<
			string,
			{
				tasks: { date: Date; name: string; color: TaskColors; answers: AnswerAttributes[] }[];
				firstname: string;
			}
		>();
		const threshold = thresholds[key];

		let color: TaskColors = 'green';
		for (const complete of completed) {
			const tasks = getJSONFromString(complete.tasks);
			let correct = 0;
			for (const { answer, rightAnswer } of tasks) {
				if (answer !== 'skip' && answer !== 'star') {
					if (answer === rightAnswer) {
						correct++;
					}
				}
			}
			if (correct <= threshold.red) {
				color = 'red';
			} else if (correct <= threshold.yellow) {
				color = 'yellow';
			} else if (correct <= threshold.green) {
				color = 'green';
			}
			const old = studentTasks.get(complete.user_id.username);
			studentTasks.set(complete.user_id.username, {
				tasks: [
					...(old?.tasks ?? []),
					{
						date: new Date(complete.createdAt),
						color,
						name: complete.user_id.firstname,
						answers: tasks
					}
				].sort((a, b) => a.date.getTime() - b.date.getTime()),
				firstname: complete.user_id.firstname
			});
		}

		return studentTasks;
	}

	$: modalOpen = selectedAnswers !== undefined;
</script>

<div class="w-3/4 mx-auto flex flex-col">
	{#if selectedTasks === undefined}
		{#each taskKeys as key}
			<div
				class="grid grid-cols-2 items-center gap-4 p-2 cursor-pointer hover:bg-gray-400"
				on:click={() => {
					selectedTasks = {
						key,
						tasks: taskOverview[key],
						studentTasks: calculateStudentTasks(taskOverview[key], key)
					};
				}}
			>
				<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
					<h5 class="mb-0"><Text {key} /></h5>
					<img
						src={`/thumbnails/${keyToThumbnailIdentifier(key).name}-01.${
							keyToThumbnailIdentifier(key).extension
						}`}
						class="self-center mix-blend-multiply"
						alt=""
					/>
				</div>
				<TaskStats completed={taskOverview[key]} taskType={key} />
			</div>
		{/each}
	{:else}
		<button class="p-4 hover:bg-gray-400 self-start" on:click={() => (selectedTasks = undefined)}
			>&lt; <Text key="back" /></button
		>
		<div class="grid grid-cols-2 items-center gap-4 p-2">
			<div class="grid items-center" style="grid-template-columns: 2fr 1fr;">
				<h5 class="mb-0"><Text key={selectedTasks.key} /></h5>
				<img
					src={`/thumbnails/${keyToThumbnailIdentifier(selectedTasks.key).name}-01.${
						keyToThumbnailIdentifier(selectedTasks.key).extension
					}`}
					class="self-center mix-blend-multiply"
					alt=""
				/>
			</div>
			<TaskStats completed={selectedTasks.tasks} taskType={selectedTasks.key} />
		</div>

		{#each [...selectedTasks.studentTasks.values()] as { tasks, firstname }}
			<div class="grid items-center gap-8" style="grid-template-columns: 150px 1fr;">
				<p>{firstname}</p>
				<div>
					{#each tasks as { date, color, answers }}
						<ColorDate
							{color}
							{date}
							on:click={() => {
								const filteredAnswers = answers.filter((answer) => answer.taskId !== undefined);
								selectedAnswers = {
									type: selectedTasks.key,
									answers: filteredAnswers.map((answer) => {
										const task = sampleTasks[selectedTasks.key].find(
											(task) => task.id === answer.taskId
										);

										return {
											...answer,
											rightAnswer: task.rightAnswer
										};
									}),
									images: Object.fromEntries(
										filteredAnswers.map((answer) => {
											const imageSrc = sampleTasks[selectedTasks.key].find(
												(task) => task.id === answer.taskId
											).src;

											return [answer.taskId, imageSrc];
										})
									)
								};
							}}
						/>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<Modal open={modalOpen}>
	<h2><Text key="student_answers" /></h2>
	{#if selectedAnswers}
		<div class="grid grid-cols-4 items-center pr-4">
			<span />
			<span class="font-bold inline-flex justify-end"><Text key="answer" /></span>
			<span class="font-bold inline-flex justify-end"><Text key="right_answer" /></span>
			<span class="font-bold inline-flex justify-end"><Text key="time_to_answer" /></span>
		</div>
		<div class="max-h-[600px] overflow-y-scroll">
			{#each selectedAnswers.answers as { taskId, time, rightAnswer, answer, skip }}
				<div
					class="grid grid-cols-4 items-center hover:bg-gray-200 pr-4"
					class:right={rightAnswer === answer}
					class:wrong={rightAnswer !== answer && answer !== 'skip'}
					class:skip
				>
					<img
						src={selectedAnswers.images[taskId]}
						alt=""
						style="width: 150px;
			object-fit: cover;
			object-position: 25% 25%; "
					/>
					<span class="inline-flex justify-end">{answer[0].toUpperCase() + answer.slice(1)}</span>
					<span class="inline-flex justify-end"
						>{rightAnswer[0].toUpperCase() + rightAnswer.slice(1)}</span
					>
					<span class="inline-flex justify-end">{time} s</span>
				</div>
			{/each}
		</div>
	{:else}
		<span>This should not be possible</span>
	{/if}

	<div class="flex justify-end mt-4">
		<Button
			on:click={() => {
				selectedAnswers = undefined;
			}}
		>
			<Text key="close" />
		</Button>
	</div>
</Modal>

<style lang="postcss">
	.right {
		@apply text-green-500;
	}
	.skip {
		@apply text-black;
	}
	.wrong {
		@apply text-red-500;
	}
</style>
