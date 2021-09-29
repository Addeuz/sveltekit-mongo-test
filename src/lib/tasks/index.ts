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
			answerType: 'numbers',
			audio: '/audio/08.m4a'
		},
		{
			id: 1,
			rightAnswer: '2',
			src: '/quantities/quantities-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '6',
			src: '/quantities/quantities-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '3',
			src: '/quantities/quantities-04.jpeg',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '9',
			src: '/quantities/quantities-05.jpeg',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '4',
			src: '/quantities/quantities-06.jpeg',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '1',
			src: '/quantities/quantities-07.jpeg',
			answerType: 'numbers'
		},
		{
			id: 7,
			rightAnswer: '5',
			src: '/quantities/quantities-08.jpeg',
			answerType: 'numbers'
		},
		{
			id: 8,
			rightAnswer: '5',
			src: '/quantities/quantities-09.jpeg',
			answerType: 'numbers'
		},
		{
			id: 9,
			rightAnswer: '2',
			src: '/quantities/quantities-10.jpeg',
			answerType: 'numbers'
		},
		{
			id: 10,
			rightAnswer: '1',
			src: '/quantities/quantities-11.jpeg',
			answerType: 'numbers'
		},
		{
			id: 11,
			rightAnswer: '4',
			src: '/quantities/quantities-12.jpeg',
			answerType: 'numbers'
		},
		{
			id: 12,
			rightAnswer: '7',
			src: '/quantities/quantities-13.jpeg',
			answerType: 'numbers'
		},
		{
			id: 13,
			rightAnswer: '3',
			src: '/quantities/quantities-14.jpeg',
			answerType: 'numbers'
		},
		{
			id: 14,
			rightAnswer: '8',
			src: '/quantities/quantities-15.jpeg',
			answerType: 'numbers'
		},
		{
			id: 15,
			rightAnswer: '2',
			src: '/quantities/quantities-16.jpeg',
			answerType: 'numbers'
		},
		{
			id: 16,
			rightAnswer: '6',
			src: '/quantities/quantities-17.jpeg',
			answerType: 'numbers'
		},
		{
			id: 17,
			rightAnswer: '4',
			src: '/quantities/quantities-18.jpeg',
			answerType: 'numbers'
		}
	]
};
