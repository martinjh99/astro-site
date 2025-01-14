/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			serif: ['Alef','Alegreya Variable', ...defaultTheme.fontFamily.serif],
		},
	},
	plugins: [],
}
