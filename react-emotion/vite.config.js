import eslint from "@nabla/vite-plugin-eslint"
import yaml from "@rollup/plugin-yaml"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svg from "vite-plugin-svgr"
import tsConfigPaths from "vite-plugin-tsconfig-paths"
import tailwindConfig from "./tailwind.config"

export default defineConfig({
	optimizeDeps: {
		force: true,
	},
	build: {
		sourcemap: true,
	},
	plugins: [
		svg({ include: "**/*.svg" }),
		yaml(),
		eslint(),
		tsConfigPaths(),
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: [["twobj", { tailwindConfig, throwError: true }], "@emotion"],
			},
		}),
	],
	esbuild: {
		logOverride: { "this-is-undefined-in-esm": "silent" },
	},
	server: {
		host: true,
	},
})
