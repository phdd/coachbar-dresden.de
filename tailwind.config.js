const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [forms, typography],
	theme: {
		extend: {
			colors: {
				'primary': '#2f435b',
				'secondary': '#00777d',
				'tertiary': '#E9EEFE'
			},
			typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-prose-links': theme('colors.primary')
          }
        }
      })
		}
	}
};
