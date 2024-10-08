import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../tailwind.config.ts"

const fullConfig = resolveConfig(tailwindConfig)

export function useTWColor(color: string) {
	return fullConfig.theme.colors[color] ?? ""
}
