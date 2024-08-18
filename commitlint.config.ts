import releaseItConfig from "./.release-it.js";

const commitlintConfig = {
	defaultIgnores: true,
	extends: [],
	ignores: [],
	rules: {
		"scope-empty": [2, "always"],
		"type-case": [2, "always", "lower-case"],
		"type-enum": [
			2,
			"always",
			releaseItConfig.plugins["@release-it/conventional-changelog"].preset.types.map(
				(
					typeData: (typeof releaseItConfig)["plugins"]["@release-it/conventional-changelog"]["preset"]["types"][number],
				): string => typeData.type,
			),
		],
	},
};

export default commitlintConfig;
