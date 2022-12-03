module.exports = {
	root: true,
	overrides: [
		{
			files: ["*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["@typescript-eslint"],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "off",
			},
		},
		{
			files: ["*.test.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				sourceType: "module",
				ecmaVersion: 13,
			},
			extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
			plugins: ["@typescript-eslint"],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "off",
			},
		},
		{
			files: ["*.js", "*.cjs", "*.mjs"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended", "prettier"],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
			},
		},
		{
			files: ["*.test.js", "*.test.cjs", "*.test.mjs"],
			parser: "espree",
			parserOptions: {
				ecmaVersion: 13,
				sourceType: "module",
			},
			extends: ["eslint:recommended"],
			plugins: [],
			env: {
				es2022: true,
				node: true,
			},
			rules: {
				"no-empty-function": "off",
			},
		},
	],
};
