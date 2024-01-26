/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{ts,tsx}",
		"./public/**/*.html",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-navy": "#152950",
				"primary-blue": "#0003CB",
				"primary-black": "#000000",
				"primary-white": "#F5F8FF",

				"secondary-navy": "#152950",
				"secondary-blue": "#0057FF",
				"secondary-black": "#000000",
				"secondary-white": "#F5F8FF",
			},
		},
	},

	plugins: [
		require("flowbite/plugin"),
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme("fontSize.2xl"), fontWeight: "bold" },
				h2: { fontSize: theme("fontSize.xl") },
				h3: { fontSize: theme("fontSize.lg") },
			});
		}),
	],
};
