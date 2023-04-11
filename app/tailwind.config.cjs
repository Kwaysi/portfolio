/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gold: {
					DEFAULT: "#fff38f",
				},
				black: {
					DEFAULT: "#242424",
				},
			},
		},
	},
	plugins: [],
};
