import { defineConfig } from "rolldown";

export default defineConfig({
	input: new URL("./src/main.ts", import.meta.url).pathname,
	platform: "browser",
	tsconfig: new URL("./tsconfig.json", import.meta.url).pathname,
	resolve: {
		// point to the local dirs
		alias: {
			"dnative": new URL("../dnative/src/index.ts", import.meta.url).pathname,
			"dnui": new URL("../dnui/src/index.ts", import.meta.url).pathname,
		},
	},
	output: {
		file: new URL("./web-content/js/demo-bundle.js", import.meta.url).pathname,
		format: "iife",
		sourcemap: true,
	},
});
