const releaseItConfig = {
	git: {
		commitArgs: [],
		commitMessage: "release: ${version}",
		pushArgs: [],
		requireUpstream: false,
		tagArgs: [],
	},
	github: {
		release: true,
	},
	hooks: {
		"after:github:release":
			"gh pr create --base 'main' --head 'release/${version}' --title 'Release \"${version}\"' --body ''",
		"before:bump": "git switch -c 'release/${version}'",
	},
	npm: {
		publish: false,
	},
	plugins: {
		"@release-it/conventional-changelog": {
			ignoreRecommendedBump: false,
			preset: {
				header: "# Changelog",
				name: "conventionalcommits",
				releaseCommitMessageFormat: "release: {{currentTag}}",
				types: [
					{
						hidden: false,
						section: "Features",
						type: "feat",
					},
					{
						hidden: false,
						section: "Bug fixes",
						type: "fix",
					},
					{
						hidden: false,
						section: "Chores",
						type: "chore",
					},
					{
						hidden: false,
						section: "Releases",
						type: "release",
					},
				],
			},
			strictSemVer: false,
		},
	},
};

export default releaseItConfig;
