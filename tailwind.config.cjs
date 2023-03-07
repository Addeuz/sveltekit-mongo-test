const config = {
	content: {
		content: ['./src/**/*.{html,js,svelte,ts}']

		// safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		extend: {
			fontFamily: {
				grund: ['Grundschrift Regular']
			},
			animation: {
				'fast-pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			gridTemplateColumns: {
				// Complex site-specific column configuration
				'1/3-2/3': '1fr 2fr'
			}
		}
	},
	plugins: []
};

module.exports = config;
