import typography from "@tailwindcss/typography"

export default {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				background: "var(--color-background)",
				"on-background": "var(--color-on-background)",
				accent: "var(--color-accent)",
			},
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	plugins: [typography],
}
