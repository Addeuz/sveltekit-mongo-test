// export interface TaskAttributes {
// 	id: number;
// 	imageString: string;
// 	rightAnswer: string;
// 	difficulty: number;
// 	answerType: 'numbers' | 'twoColors' | 'threeColors';
// }

import type { TaskAttributes } from 'src/global';

type TaskKeys = 'quantities';

export const sampleTasks: { [key in TaskKeys]: TaskAttributes[] } = {
	quantities: [
		{
			id: 0,
			rightAnswer: '3',
			src: '/quantities/quantities-01.jpeg',
			answerType: 'numbers'
		}
	]
};
