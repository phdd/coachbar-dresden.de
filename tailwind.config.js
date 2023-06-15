const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [forms, typography],
	theme: {
		extend: {
			colors: {
				'primary': '#266A81',
				'secondary': '#00939B',
				'tertiary': '#E9EEFE'
			}
		}
	}
};
