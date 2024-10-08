export default {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
}
