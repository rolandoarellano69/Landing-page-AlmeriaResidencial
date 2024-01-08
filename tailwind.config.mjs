import animations from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			'primary':'#0F3A5D',
			'secondary':'#a91f25',
			}
		},
	},
	plugins: [animations],
}
