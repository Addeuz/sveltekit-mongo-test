import { writable } from 'svelte/store';

export const tutorials = writable({
	quantities: {
		seen: false,
		type: 'number'
	},
	colorPattern: {
		seen: false,
		type: 'number'
	},
	difference: {
		seen: false,
		type: 'number'
	},
	hiddenNumbers: {
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
		seen: false,
		type: 'number'
	},
	numberPattern: {
		seen: false,
		type: 'number'
	}
});
