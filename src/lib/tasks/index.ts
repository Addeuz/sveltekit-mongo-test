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
	| 'difference'
	| 'hiddenNumber'
	| 'numberComparison'
	| 'plus'
	| 'minus'
	| 'colorPattern'
	| 'quantityComparison';

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
	],
	numberPattern: [
		{
			id: 0,
			rightAnswer: '1',
			src: '/number_pattern/numberpattern-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/23.m4a'
		},
		{
			id: 1,
			rightAnswer: '2',
			src: '/number_pattern/numberpattern-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '6',
			src: '/number_pattern/numberpattern-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '3',
			src: '/number_pattern/numberpattern-04.jpeg',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '9',
			src: '/number_pattern/numberpattern-05.jpeg',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '4',
			src: '/number_pattern/numberpattern-06.jpeg',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '1',
			src: '/number_pattern/numberpattern-07.jpeg',
			answerType: 'numbers'
		},
		{
			id: 7,
			rightAnswer: '5',
			src: '/number_pattern/numberpattern-08.jpeg',
			answerType: 'numbers'
		},
		{
			id: 8,
			rightAnswer: '5',
			src: '/number_pattern/numberpattern-09.jpeg',
			answerType: 'numbers'
		},
		{
			id: 9,
			rightAnswer: '2',
			src: '/number_pattern/numberpattern-10.jpeg',
			answerType: 'numbers'
		},
		{
			id: 10,
			rightAnswer: '1',
			src: '/number_pattern/numberpattern-11.jpeg',
			answerType: 'numbers'
		}
	],
	numberLine: [
		{
			id: 0,
			rightAnswer: '2',
			src: '/number_line/numberline-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/09.m4a'
		},
		{
			id: 1,
			rightAnswer: '4',
			src: '/number_line/numberline-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '8',
			src: '/number_line/numberline-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '6',
			src: '/number_line/numberline-04.jpeg',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '5',
			src: '/number_line/numberline-05.jpeg',
			answerType: 'numbers'
		},
		{
			id: 5,
			rightAnswer: '8',
			src: '/number_line/numberline-06.jpeg',
			answerType: 'numbers'
		},
		{
			id: 6,
			rightAnswer: '10',
			src: '/number_line/numberline-07.jpeg',
			answerType: 'numbers'
		},
		{
			id: 7,
			rightAnswer: '15',
			src: '/number_line/numberline-08.jpeg',
			answerType: 'numbers'
		},
		{
			id: 8,
			rightAnswer: '12',
			src: '/number_line/numberline-09.jpeg',
			answerType: 'numbers'
		},
		{
			id: 9,
			rightAnswer: '14',
			src: '/number_line/numberline-10.jpeg',
			answerType: 'numbers'
		}
	],
	difference: [
		{
			id: 0,
			rightAnswer: '2',
			src: '/difference/difference-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/11.m4a'
		},
		{
			id: 1,
			rightAnswer: '3',
			src: '/difference/difference-02.jpeg',
			answerType: 'numbers',
			audio: '/audio/12.m4a'
		},
		{
			id: 2,
			rightAnswer: '3',
			src: '/difference/difference-03.jpeg',
			answerType: 'numbers',
			audio: '/audio/13.m4a'
		},
		{
			id: 3,
			rightAnswer: '1',
			src: '/difference/difference-04.jpeg',
			answerType: 'numbers',
			audio: '/audio/14.m4a'
		},
		{
			id: 4,
			rightAnswer: '4',
			src: '/difference/difference-05.jpeg',
			answerType: 'numbers',
			audio: '/audio/15.m4a'
		},
		{
			id: 5,
			rightAnswer: '3',
			src: '/difference/difference-06.jpeg',
			answerType: 'numbers',
			audio: '/audio/16.m4a'
		}
	],
	hiddenNumber: [
		{
			id: 0,
			rightAnswer: '2',
			src: '/number_comparison/hiddennumber-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/10.m4a'
		},
		{
			id: 1,
			rightAnswer: '6',
			src: '/number_comparison/hiddennumber-02.jpeg',
			answerType: 'numbers'
		},
		{
			id: 2,
			rightAnswer: '14',
			src: '/number_comparison/hiddennumber-03.jpeg',
			answerType: 'numbers'
		},
		{
			id: 3,
			rightAnswer: '9',
			src: '/number_comparison/hiddennumber-04.jpeg',
			answerType: 'numbers'
		},
		{
			id: 4,
			rightAnswer: '8',
			src: '/number_comparison/hiddennumber-05.jpeg',
			answerType: 'numbers'
		}
	],
	numberComparison: [
		{
			id: 0,
			rightAnswer: '5',
			src: '/number_comparison/numbercomparison-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/17.m4a'
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
	plus: [
		{
			id: 0,
			rightAnswer: '8',
			src: '/plus/plus-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/18.m4a'
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
	minus: [
		{
			id: 0,
			rightAnswer: '3',
			src: '/minus/minus-01.jpeg',
			answerType: 'numbers',
			audio: '/audio/19.m4a'
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
	colorPattern: [
		{
			id: 0,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-01.jpeg',
			answerType: 'threeColors',
			audio: '/audio/21.m4a'
		},
		{
			id: 1,
			rightAnswer: 'yellow',
			src: '/color_pattern/colorpatterns-02.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 2,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-03.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 3,
			rightAnswer: 'blue',
			src: '/color_pattern/colorpatterns-04.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 4,
			rightAnswer: 'yellow',
			src: '/color_pattern/colorpatterns-05.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 5,
			rightAnswer: 'blue',
			src: '/color_pattern/colorpatterns-06.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 6,
			rightAnswer: 'yellow',
			src: '/color_pattern/colorpatterns-07.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 7,
			rightAnswer: 'yellow',
			src: '/color_pattern/colorpatterns-08.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 8,
			rightAnswer: 'yellow',
			src: '/color_pattern/colorpatterns-09.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 9,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-10.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 10,
			rightAnswer: 'red',
			src: '/color_pattern/colorpatterns-11.jpeg',
			answerType: 'threeColors'
		},
		{
			id: 11,
			rightAnswer: 'blue',
			src: '/color_pattern/colorpatterns-12.jpeg',
			answerType: 'threeColors'
		}
	],
	quantityComparison: [
		{
			id: 0,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-01.jpeg',
			answerType: 'twoColors',
			audio: '/audio/21.m4a'
		},
		{
			id: 1,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-02.jpeg',
			answerType: 'twoColors'
		},
		{
			id: 2,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-03.jpeg',
			answerType: 'twoColors'
		},
		{
			id: 3,
			rightAnswer: 'blue',
			src: '/quantity_comparison/quantitiycomparison-04.jpeg',
			answerType: 'twoColors'
		},
		{
			id: 4,
			rightAnswer: 'equal',
			src: '/quantity_comparison/quantitiycomparison-05.jpeg',
			answerType: 'twoColors'
		},
		{
			id: 5,
			rightAnswer: 'blue',
			src: '/quantity_comparison/quantitiycomparison-06.jpeg',
			answerType: 'twoColors'
		}
	]
};
