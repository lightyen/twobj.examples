import yaml from "@rollup/plugin-yaml"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"
import svg from "vite-plugin-svgr"
import tsConfigPaths from "vite-plugin-tsconfig-paths"
import tailwindConfig from "./tailwind.config"

export default defineConfig({
	plugins: [
		svg({ exportAsDefault: true }),
		yaml(),
		eslint(),
		tsConfigPaths(),
		react({
			babel: {
				plugins: [["twobj", { tailwindConfig, throwError: true }], "styled-components"],
			},
		}),
	],
	esbuild: {
		logOverride: { "this-is-undefined-in-esm": "silent" },
	},
})
