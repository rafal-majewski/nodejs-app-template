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
		"after:@release-it/conventional-changelog:bump":
			"echo 'after:@release-it/conventional-changelog:bump'",
		"after:@release-it/conventional-changelog:init":
			"echo 'after:@release-it/conventional-changelog:init'",
		"after:@release-it/conventional-changelog:release":
			"echo 'after:@release-it/conventional-changelog:release'",
		"after:bump": "echo 'after:bump'",
		"after:git:bump": "echo 'after:git:bump'",
		"after:git:init": "echo 'after:git:init'",
		"after:git:release": "echo 'after:git:release'",
		"after:github:bump": "echo 'after:github:bump'",
		"after:github:init": "echo 'after:github:init'",
		"after:github:release": "echo 'after:github:release'",
		"after:init": "echo 'after:init'",
		"after:release": "echo 'after:release'",
		"after:version:bump": "echo 'after:version:bump'",
		"after:version:init": "echo 'after:version:init'",
		"after:version:release": "echo 'after:version:release'",
		"before:@release-it/conventional-changelog:bump":
			"echo 'before:@release-it/conventional-changelog:bump'",
		"before:@release-it/conventional-changelog:init":
			"echo 'before:@release-it/conventional-changelog:init'",
		"before:@release-it/conventional-changelog:release":
			"echo 'before:@release-it/conventional-changelog:release'",
		"before:bump": "echo 'before:bump'",
		"before:git:bump": "echo 'before:git:bump'",
		"before:git:init": "echo 'before:git:init'",
		"before:git:release": "echo 'before:git:release'",
		"before:github:bump": "echo 'before:github:bump'",
		"before:github:init": "echo 'before:github:init'",
		"before:github:release": "echo 'before:github:release'",
		"before:init": "echo 'before:init'",
		"before:release": "echo 'before:release'",
		"before:version:bump": "echo 'before:version:bump'",
		"before:version:init": "echo 'before:version:init'",
		"before:version:release": "echo 'before:version:release'",
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
