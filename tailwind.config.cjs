/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
    daisyui: {
        themes: [
            {
                dark: {
                    "primary": "#D4AF37",      // Link Color
                    "secondary": "#D69999",    // Secondary Text Color
                    "accent": "#C5B57D",       // Matching Accent to Main Text
                    "neutral": "#1C1917",      // Deep Shadow
                    "base-100": "#241524",     // Body / Background / Nav Color
                    "base-content": "#C5B57D", // Main Text Color
                    "info": "#3ABFF8",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#F87272",
                },
            },
            "light",
            "dark",
        ],
    },
}
