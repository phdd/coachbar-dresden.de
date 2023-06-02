const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [typography],
	theme: {
		extend: {
			colors: {
				'primary': '#2f435b',
				'light-blue-grey': '#D2DDFE'
			}
		}
	}
};
