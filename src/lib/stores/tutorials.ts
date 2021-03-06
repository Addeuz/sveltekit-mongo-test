import { writable } from 'svelte/store';

export const tutorials = writable({
	tutorial: {
		number: false,
		color: true
	},
	quantities: {
		type: 'number'
	},
	colorPattern: {
		type: 'color'
	},
	completionToTen: {
		type: 'number'
	},
	hiddenNumber: {
		type: 'number'
	},
	minus: {
		type: 'number'
	},
	plus: {
		type: 'number'
	},
	numberComparison: {
		type: 'number'
	},
	numberLine: {
		type: 'number'
	},
	quantityComparison: {
		type: 'color'
	},
	numberPattern: {
		type: 'number'
	},
	star: {
		seen: false,
		type: 'star'
	}
});
