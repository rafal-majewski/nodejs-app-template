import {defineConfig} from "vitest/config";

export default defineConfig({
	test: {
		include: ["**/*.test.ts", "**/*.test.js", "**/*.test.cjs", "**/*.test.mjs"],
		coverage: {
			provider: "v8",
			reportsDirectory: "coverage-report",
			reporter: ["html", "text"],
		},
	},
});
