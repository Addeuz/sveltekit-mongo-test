import { dev } from '$app/env';
import QRCode from 'qrcode';
import { sampleTasks, thresholds } from './tasks';
import type { TaskColors, TaskKey } from './tasks';
import type { AnswerAttributes } from 'src/global';
import { getJSONFromString } from './database/models/completedTasks.models';
import type { ICompletedRun } from './database/models/completedTasks.models';
import { variables } from './environment';

export function getUrl(prefix?: string): string {
	return dev ? `http://localhost:3000${prefix}` : `https://didunas.vercel.app${prefix}`;
}

export function predictUrl(): string {
	return dev ? 'http://localhost:5000/api/predict' : `${variables.apiURL}/api/predict`;
}

export function generateUserId(): string {
	let left = '';
	let right = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < 4) {
		left += characters.charAt(Math.floor(Math.random() * charactersLength));
		right += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return `${left}-${right}`;
}

export const generateQRCode = async (text: string): Promise<string> => {
	try {
		return await QRCode.toDataURL(text);
	} catch (err) {
		console.error(err);
	}
};

export type TaskModalAnswers = {
	type: TaskKey;
	answers: AnswerAttributes[];
	images: { [key: string]: string };
};

export function calculateTaskModalData(
	taskKey: TaskKey,
	answers: AnswerAttributes[],
	date: Date
): [Date, TaskModalAnswers] {
	const filteredAnswers = answers.filter((answer) => answer.taskId !== undefined);
	return [
		date,
		{
			type: taskKey,
			answers: filteredAnswers.map((answer) => {
				const task = sampleTasks[taskKey].find((task) => task.id === answer.taskId);

				return {
					...answer,
					rightAnswer: task.rightAnswer
				};
			}),
			images: Object.fromEntries(
				filteredAnswers.map((answer) => {
					const imageSrc = sampleTasks[taskKey].find((task) => task.id === answer.taskId).src;

					return [answer.taskId, imageSrc];
				})
			)
		}
	];
}

export function calculateStudentTasks(
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
