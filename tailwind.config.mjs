/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['AlbertSans', ...fontFamily.sans],
				display: ['Lora', ...fontFamily.sans],
				code: ['JetBrainsMono', ...fontFamily.sans],
			  },
			  colors: {
				primary: {
				  // Customize it on globals.css :root
				  200: 'rgb(var(--tw-clr-primary-200) / <alpha-value>)',
				  300: 'rgb(var(--tw-clr-primary-300) / <alpha-value>)',
				  400: 'rgb(var(--tw-clr-primary-400) / <alpha-value>)',
				  500: 'rgb(var(--tw-clr-primary-500) / <alpha-value>)',
				},
				dark: '#0e1111',
			  },
			  keyframes: {
				flicker: {
				  '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
					opacity: 0.99,
					filter:
					  'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
				  },
				  '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
					opacity: 0.4,
					filter: 'none',
				  },
				},
				tilt: {
				  '0%, 50%, 100%': {
					transform: 'rotate(0deg)',
				  },
				  '25%': {
					transform: 'rotate(0.5deg)',
				  },
				  '75%': {
					transform: 'rotate(-0.5deg)',
				  },
				},
			  },
			  animation: {
				flicker: 'flicker 3s linear infinite',
				tilt: 'tilt 10s infinite linear',
			  },
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
