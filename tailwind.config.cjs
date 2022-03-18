const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

const config = {
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			]
		}
		// safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		extend: {
			fontFamily: {
				grund: ['Grundschrift Regular']
			},
			animation: {
				'fast-pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: []
};

module.exports = config;
