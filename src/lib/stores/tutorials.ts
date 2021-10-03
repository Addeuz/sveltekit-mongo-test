import { writable } from 'svelte/store';

export const tutorials = writable({
	quantities: {
		seen: false,
		type: 'number'
	},
	colorPattern: {
		seen: true,
		type: 'color'
	},
	difference: {
		seen: false,
		type: 'number'
	},
	hiddenNumber: {
		seen: false,
		type: 'number'
	},
	minus: {
		seen: false,
		type: 'number'
	},
	plus: {
		seen: false,
		type: 'number'
	},
	numberComparison: {
		seen: false,
		type: 'number'
	},
	numberLine: {
		seen: false,
		type: 'number'
	},
	quantityComparison: {
		seen: true,
		type: 'color'
	},
	numberPattern: {
		seen: false,
		type: 'number'
	}
});
