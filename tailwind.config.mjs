/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				hammer: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(45deg)' },
				},
			},
			animation: {
				hammer: 'hammer 2s infinite',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
