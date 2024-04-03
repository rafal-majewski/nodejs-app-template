import {defineConfig} from "vitest/config";

const vitestConfig = defineConfig({
	plugins: [],
	resolve: {
		alias: [],
	},
	test: {
		coverage: {
			provider: "v8",
			reporter: ["html", "text"],
			reportsDirectory: "coverage-report",
		},
		environment: "node",
		include: ["**/*.test.ts"],
	},
});

export default vitestConfig;
