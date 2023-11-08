import type { AnswerAttributes, TaskAttributes } from 'src/global';
import type { ICompletedRun } from '$lib/database/models/completedTasks.models';

export const taskKeys = [
	'quantities',
	'quantityComparison',
	'numberComparison',
	'colorPattern',
	'numberPattern',
	'hiddenNumber',
	'numberLine',
	'completionToTen',
	'plus',
	'minus'
] as const;
export type TaskKey = typeof taskKeys[number];
export function isTaskKey(key: unknown): key is TaskKey {
	return typeof key === 'string' && taskKeys.includes(key as TaskKey);
}

export function keyToThumbnailIdentifier(key: TaskKey): { name: string; extension: string } {
	switch (key) {
		case 'quantities':
			return { name: 'quantities', extension: 'png' };
		case 'numberPattern':
			return {
				name: 'numberpattern',
				extension: 'png'
			};
		case 'numberLine':
			return {
				name: 'numberline',
				extension: 'png'
			};
		case 'hiddenNumber':
			return {
				name: 'predecessor-successor',
				extension: 'png'
			};
		case 'numberComparison':
			return {
				name: 'numbercomparison',
				extension: 'jpeg'
			};
		case 'plus':
			return {
				name: 'plus',
				extension: 'jpeg'
			};
		case 'minus':
			return {
				name: 'minus',
				extension: 'jpeg'
			};
		case 'colorPattern':
			return {
				name: 'colorpatterns',
				extension: 'png'
			};
		case 'quantityComparison':
			return {
				name: 'quantitycomparison',
				extension: 'png'
			};
		case 'completionToTen':
			return {
				name: 'completionto10',
				extension: 'png'
			};
	}
}

export type TaskColors = 'green' | 'yellow' | 'red';

export type TaskOverview = { [key in TaskKey]: ICompletedRun[] };

export type StudentOverview = Map<
	string,
	{
		overall: TaskColors[];
		tasks: { [key in TaskKey]: { color: TaskColors; date: Date; answers: AnswerAttributes[] }[] };
		firstname: string;
	}
>;

export type Threshold = { red: number; yellow: number; green: number };

export const thresholds: { [key in TaskKey]: Threshold } = {
	quantities: {
		red: 11,
		yellow: 16,
		green: 18
	},
	numberPattern: {
		red: 2,
		yellow: 6,
		green: 7
	},
	numberLine: {
		red: 4,
		yellow: 9,
		green: 19
	},
	hiddenNumber: {
		red: 0,
		yellow: 4,
		green: 7
	},
	numberComparison: {
		red: 2,
		yellow: 5,
		green: 6
	},
	plus: {
		red: 1,
		yellow: 3,
		green: 4
	},
	minus: {
		red: 1,
		yellow: 3,
		green: 4
	},
	colorPattern: {
		red: 2,
		yellow: 5,
		green: 7
	},
	quantityComparison: {
		red: 5,
		yellow: 10,
		green: 13
	},
	completionToTen: {
		red: 2,
		yellow: 5,
		green: 10
	}
};

// export function parseTasks

export const sampleTasks: { [key in TaskKey]: TaskAttributes[] } = {
	// vvvvvvv done vvvvvvvv
	quantities: [
		{
			id: 0,
			rightAnswer: '3',
			src: '/quantities/quantities-01.png',
			answerType: 'numbers',
			audio: { de: '/audio/08_de.MP3', el_cy: '/audio/08_el_cy.m4a', sv: '/audio/08_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '2',
			src: '/quantities/quantities-02.png',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '6',
			src: '/quantities/quantities-03.png',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '3',
			src: '/quantities/quantities-04.png',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '9',
			src: '/quantities/quantities-05.png',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '4',
			src: '/quantities/quantities-06.png',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '1',
			src: '/quantities/quantities-07.png',
			answerType: 'numbers'
		},
		{
			id: 7,
			rightAnswer: '5',
			src: '/quantities/quantities-08.png',
			answerType: 'numbers'
		},
		{
			id: 8,
			rightAnswer: '5',
			src: '/quantities/quantities-09.png',
			answerType: 'numbers'
		},
		{
			id: 9,
			rightAnswer: '1',
			src: '/quantities/quantities-10.png',
			answerType: 'numbers'
		},
		{
			id: 10,
			rightAnswer: '4',
			src: '/quantities/quantities-11.png',
			answerType: 'numbers'
		},
		{
			id: 11,
			rightAnswer: '7',
			src: '/quantities/quantities-12.png',
			answerType: 'numbers'
		},
		{
			id: 12,
			rightAnswer: '3',
			src: '/quantities/quantities-13.png',
			answerType: 'numbers'
		},
		{
			id: 13,
			rightAnswer: '8',
			src: '/quantities/quantities-14.png',
			answerType: 'numbers'
		},
		{
			id: 14,
			rightAnswer: '2',
			src: '/quantities/quantities-15.png',
			answerType: 'numbers'
		},
		{
			id: 15,
			rightAnswer: '6',
			src: '/quantities/quantities-16.png',
			answerType: 'numbers'
		},
		{
			id: 16,
			rightAnswer: '4',
			src: '/quantities/quantities-17.png',
			answerType: 'numbers'
		},
		{
			id: 17,
			rightAnswer: '1',
			src: '/quantities/quantities-18.png',
			answerType: 'numbers'
		}
	],
	// vvvvvvv done vvvvvvvv
	numberPattern: [
		{
			id: 0,
			rightAnswer: '1',
			src: '/number_pattern/numberpattern-01.png',
			answerType: 'numbers',
			audio: { de: '/audio/18_de.MP3', el_cy: '/audio/18_el_cy.m4a', sv: '/audio/18_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '5',
			src: '/number_pattern/numberpattern-02.png',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '4',
			src: '/number_pattern/numberpattern-03.png',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '1',
			src: '/number_pattern/numberpattern-04.png',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '8',
			src: '/number_pattern/numberpattern-05.png',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '3',
			src: '/number_pattern/numberpattern-06.png',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '7',
			src: '/number_pattern/numberpattern-07.png',
			answerType: 'numbers'
		}
	],
	// vvvvvvv done vvvvvvvv
	numberLine: [
		{
			id: 0,
			rightAnswer: '2',
			src: '/number_line/numberline-01.png',
			answerType: 'numbers',
			audio: { de: '/audio/09_de.MP3', el_cy: '/audio/09_el_cy.m4a', sv: '/audio/09_sv.mp3' },
			video: { de: '/video/numberline_10_de.mp4', el_cy: '/video/numberline_10_el_cy.mp4' }
		},
		{
			id: 1,
			rightAnswer: '9',
			src: '/number_line/numberline-02.png',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '6',
			src: '/number_line/numberline-03.png',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '4',
			src: '/number_line/numberline-04.png',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '8',
			src: '/number_line/numberline-05.png',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '5',
			src: '/number_line/numberline-06.png',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '7',
			src: '/number_line/numberline-07.png',
			answerType: 'numbers'
		},
		{
			id: 7,
			rightAnswer: '3',
			src: '/number_line/numberline-08.png',
			answerType: 'numbers'
		},
		{
			id: 8,
			rightAnswer: '18',
			src: '/number_line/numberline-09.png',
			answerType: 'numbers',
			audio: { de: '/audio/09_de.MP3', el_cy: '/audio/09_el_cy.m4a', sv: '/audio/09_sv.mp3' },
			video: { de: '/video/numberline_20_de.mp4', el_cy: '/video/numberline_20_el_cy.mp4' }
		},
		{
			id: 9,
			rightAnswer: '3',
			src: '/number_line/numberline-10.png',
			answerType: 'numbers'
		},
		{
			id: 10,
			rightAnswer: '6',
			src: '/number_line/numberline-11.png',
			answerType: 'numbers'
		},
		{
			id: 11,
			rightAnswer: '15',
			src: '/number_line/numberline-12.png',
			answerType: 'numbers'
		},
		{
			id: 12,
			rightAnswer: '8',
			src: '/number_line/numberline-13.png',
			answerType: 'numbers'
		},
		{
			id: 13,
			rightAnswer: '10',
			src: '/number_line/numberline-14.png',
			answerType: 'numbers'
		},
		{
			id: 14,
			rightAnswer: '19',
			src: '/number_line/numberline-15.png',
			answerType: 'numbers'
		},
		{
			id: 15,
			rightAnswer: '11',
			src: '/number_line/numberline-16.png',
			answerType: 'numbers'
		},
		{
			id: 16,
			rightAnswer: '13',
			src: '/number_line/numberline-17.png',
			answerType: 'numbers'
		},
		{
			id: 17,
			rightAnswer: '4',
			src: '/number_line/numberline-18.png',
			answerType: 'numbers'
		},
		{
			id: 18,
			rightAnswer: '16',
			src: '/number_line/numberline-19.png',
			answerType: 'numbers'
		}
	],
	// vvvvvvv done vvvvvvvv
	hiddenNumber: [
		{
			id: 0,
			rightAnswer: '3',
			src: '/hidden_number/hiddennumber-01.png',
			answerType: 'numbers',
			audio: { de: '/audio/10_de.MP3', el_cy: '/audio/10_el_cy.m4a', sv: '/audio/10_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '5',
			src: '/hidden_number/hiddennumber-02.png',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '12',
			src: '/hidden_number/hiddennumber-03.png',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '6',
			src: '/hidden_number/hiddennumber-04.png',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '17',
			src: '/hidden_number/hiddennumber-05.png',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '4',
			src: '/hidden_number/hiddennumber-06.png',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '16',
			src: '/hidden_number/hiddennumber-07.png',
			answerType: 'numbers'
		}
	],
	numberComparison: [
		{
			id: 0,
			rightAnswer: '5',
			src: '/number_comparison/numbercomparison-01.jpeg',
			answerType: 'numbers',
			audio: { de: '/audio/13_de.MP3', el_cy: '/audio/13_el_cy.m4a', sv: '/audio/13_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '9',
			src: '/number_comparison/numbercomparison-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '16',
			src: '/number_comparison/numbercomparison-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '13',
			src: '/number_comparison/numbercomparison-04.jpeg',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '14',
			src: '/number_comparison/numbercomparison-05.jpeg',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '15',
			src: '/number_comparison/numbercomparison-06.jpeg',
			answerType: 'numbers'
		}
	],
	// vvvvvvv done vvvvvvvv
	plus: [
		{
			id: 0,
			rightAnswer: '8',
			src: '/plus/plus-01.jpeg',
			answerType: 'numbers',
			audio: { de: '/audio/14_de.MP3', el_cy: '/audio/14_el_cy.m4a', sv: '/audio/14_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '9',
			src: '/plus/plus-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '12',
			src: '/plus/plus-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '14',
			src: '/plus/plus-04.jpeg',
			answerType: 'numbers'
		}
	],
	// vvvvvvv done vvvvvvvv
	minus: [
		{
			id: 0,
			rightAnswer: '3',
			src: '/minus/minus-01.jpeg',
			answerType: 'numbers',
			audio: { de: '/audio/14_de.MP3', el_cy: '/audio/14_el_cy.m4a', sv: '/audio/14_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '5',
			src: '/minus/minus-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '2',
			src: '/minus/minus-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '8',
			src: '/minus/minus-04.jpeg',
			answerType: 'numbers'
		}
	],
	// vvvvvvv done vvvvvvvv
	colorPattern: [
		{
			id: 0,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-01.png',
			answerType: 'threeColors',
			audio: { de: '/audio/16_de.MP3', el_cy: '/audio/16_el_cy.m4a', sv: '/audio/16_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: 'blue',
			src: '/color_pattern/colorpatterns-02.png',
			answerType: 'threeColors'
		},
		{
			id: 2,
			rightAnswer: 'yellow',
			src: '/color_pattern/colorpatterns-03.png',
			answerType: 'threeColors'
		},
		{
			id: 3,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-04.png',
			answerType: 'threeColors'
		},
		{
			id: 4,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-05.png',
			answerType: 'threeColors'
		},
		{
			id: 5,
			rightAnswer: 'blue',
			src: '/color_pattern/colorpatterns-06.png',
			answerType: 'threeColors'
		},
		{
			id: 6,
			rightAnswer: 'blue',
			src: '/color_pattern/colorpatterns-07.png',
			answerType: 'threeColors'
		}
	],
	// vvvvvvv done vvvvvvvv
	quantityComparison: [
		{
			id: 0,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-01.png',
			answerType: 'twoColors',
			audio: { de: '/audio/15_de.MP3', el_cy: '/audio/15_el_cy.m4a', sv: '/audio/15_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-02.png',
			answerType: 'twoColors'
		},
		{
			id: 2,
			rightAnswer: 'yellow',
			src: '/quantity_comparison/quantitiycomparison-03.png',
			answerType: 'twoColors'
		},
		{
			id: 3,
			rightAnswer: 'yellow',
			src: '/quantity_comparison/quantitiycomparison-04.png',
			answerType: 'twoColors'
		},
		{
			id: 4,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-05.png',
			answerType: 'twoColors'
		},
		{
			id: 5,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-06.png',
			answerType: 'twoColors'
		},
		{
			id: 6,
			rightAnswer: 'blue',
			src: '/quantity_comparison/quantitiycomparison-07.png',
			answerType: 'twoColors'
		},
		{
			id: 7,
			rightAnswer: 'yellow',
			src: '/quantity_comparison/quantitiycomparison-08.png',
			answerType: 'twoColors'
		},
		{
			id: 8,
			rightAnswer: 'yellow',
			src: '/quantity_comparison/quantitiycomparison-09.png',
			answerType: 'twoColors'
		},
		{
			id: 9,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-10.png',
			answerType: 'twoColors'
		},
		{
			id: 10,
			rightAnswer: 'blue',
			src: '/quantity_comparison/quantitiycomparison-11.png',
			answerType: 'twoColors'
		},
		{
			id: 11,
			rightAnswer: 'blue',
			src: '/quantity_comparison/quantitiycomparison-12.png',
			answerType: 'twoColors'
		},
		{
			id: 12,
			rightAnswer: 'blue',
			src: '/quantity_comparison/quantitiycomparison-13.png',
			answerType: 'twoColors'
		}
	],
	// vvvvvvv done vvvvvvvv
	completionToTen: [
		{
			id: 0,
			rightAnswer: '10',
			src: '/completion_to_ten/completionto10-01.png',
			answerType: 'numbers',
			audio: { de: '/audio/11_de.MP3', el_cy: '/audio/11_el_cy.m4a', sv: '/audio/11_sv.mp3' }
		},
		{
			id: 1,
			rightAnswer: '2',
			src: '/completion_to_ten/completionto10-02.png',
			answerType: 'numbers',
			audio: { de: '/audio/12_de.MP3', el_cy: '/audio/12_el_cy.m4a', sv: '/audio/12_sv.mp3' }
		},
		{
			id: 2,
			rightAnswer: '8',
			src: '/completion_to_ten/completionto10-03.png',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '4',
			src: '/completion_to_ten/completionto10-04.png',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '9',
			src: '/completion_to_ten/completionto10-05.png',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '3',
			src: '/completion_to_ten/completionto10-06.png',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '6',
			src: '/completion_to_ten/completionto10-07.png',
			answerType: 'numbers'
		},
		{
			id: 7,
			rightAnswer: '1',
			src: '/completion_to_ten/completionto10-08.png',
			answerType: 'numbers'
		},
		{
			id: 8,
			rightAnswer: '7',
			src: '/completion_to_ten/completionto10-09.png',
			answerType: 'numbers'
		},
		{
			id: 9,
			rightAnswer: '5',
			src: '/completion_to_ten/completionto10-10.png',
			answerType: 'numbers'
		}
	]
};

export const numberComparisonNumbers: {
	[key: string]: { numbers: { answer: number; src: string; margin: number }[] };
} = {
	'0': {
		numbers: [
			{ answer: 2, src: '/number_comparison/numbers/numbercomparison-1-2.jpeg', margin: -10 },
			{ answer: 5, src: '/number_comparison/numbers/numbercomparison-1-5.jpeg', margin: 10 }
		]
	},
	'1': {
		numbers: [
			{ answer: 9, src: '/number_comparison/numbers/numbercomparison-2-9.jpeg', margin: 10 },
			{ answer: 3, src: '/number_comparison/numbers/numbercomparison-2-3.jpeg', margin: -7 }
		]
	},
	'2': {
		numbers: [
			{ answer: 5, src: '/number_comparison/numbers/numbercomparison-3-5.jpeg', margin: 0 },
			{ answer: 16, src: '/number_comparison/numbers/numbercomparison-3-16.jpeg', margin: 7 }
		]
	},
	'3': {
		numbers: [
			{ answer: 7, src: '/number_comparison/numbers/numbercomparison-4-7.jpeg', margin: -3 },
			{ answer: 13, src: '/number_comparison/numbers/numbercomparison-4-13.jpeg', margin: 5 }
		]
	},
	'4': {
		numbers: [
			{ answer: 5, src: '/number_comparison/numbers/numbercomparison-5-5.jpeg', margin: -2 },
			{ answer: 3, src: '/number_comparison/numbers/numbercomparison-5-3.jpeg', margin: 15 },
			{ answer: 14, src: '/number_comparison/numbers/numbercomparison-5-14.jpeg', margin: -10 }
		]
	},
	'5': {
		numbers: [
			{ answer: 13, src: '/number_comparison/numbers/numbercomparison-6-13.jpeg', margin: 12 },
			{ answer: 15, src: '/number_comparison/numbers/numbercomparison-6-15.jpeg', margin: -17 },
			{ answer: 9, src: '/number_comparison/numbers/numbercomparison-6-9.jpeg', margin: 8 }
		]
	}
};
