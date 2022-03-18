// export interface TaskAttributes {
// 	id: number;
// 	imageString: string;
// 	rightAnswer: string;
// 	difficulty: number;
// 	answerType: 'numbers' | 'twoColors' | 'threeColors';
// }

import type { TaskAttributes } from 'src/global';

type TaskKeys =
	| 'quantities'
	| 'numberPattern'
	| 'numberLine'
	| 'hiddenNumber'
	| 'numberComparison'
	| 'plus'
	| 'minus'
	| 'colorPattern'
	| 'quantityComparison'
	| 'completionToTen';

export const sampleTasks: { [key in TaskKeys]: TaskAttributes[] } = {
	// vvvvvvv done vvvvvvvv
	quantities: [
		{
			id: 0,
			rightAnswer: '3',
			src: '/quantities/quantities-01.png',
			answerType: 'numbers',
			audio: '/audio/08_de.MP3'
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
			audio: '/audio/18_de.MP3'
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
			audio: '/audio/09_de.MP3',
			video: '/video/numberline_10.mp4'
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
			audio: '/audio/09_de.MP3',
			video: '/video/numberline_20.mp4'
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
			rightAnswer: '10',
			src: '/hidden_number/hiddennumber-01.png',
			answerType: 'numbers',
			audio: '/audio/10_de.MP3'
		},
		{
			id: 1,
			rightAnswer: '4',
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
			audio: '/audio/13_de.MP3'
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
			audio: '/audio/14_de.MP3'
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
			audio: '/audio/14_de.MP3'
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
			audio: '/audio/16_de.MP3'
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
			audio: '/audio/15_de.MP3'
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
			audio: '/audio/11_de.MP3'
		},
		{
			id: 1,
			rightAnswer: '2',
			src: '/completion_to_ten/completionto10-02.png',
			answerType: 'numbers',
			audio: '/audio/12_de.MP3'
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
			rightAnswer: '4',
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
			{ answer: 6, src: '/number_comparison/numbers/numbercomparison-3-16.jpeg', margin: 7 }
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
			{ answer: 15, src: '/number_comparison/numbers/numbercomparison-5-14.jpeg', margin: -10 }
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
