/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'purpleBase': '#271635',
			'BlancoBase': '#DDDDDD',
			'pinkBase': '#967AAC'
		},
		extend: {},
	},
	plugins: [
		require('daisyui'),
	],
}
