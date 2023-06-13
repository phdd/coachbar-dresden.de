const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [typography],
	theme: {
		extend: {
			colors: {
				'primary': '#2f435b',
				'secondary': '#00939B',
				'tertiary': '#E9EEFE'
			},
			scale: {
				'-100': '-1',
			}
		}
	}
};
