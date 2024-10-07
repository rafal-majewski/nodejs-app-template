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
			"echo 'after:@release-it/conventional-changelog:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:@release-it/conventional-changelog:init":
			"echo 'after:@release-it/conventional-changelog:init'",
		"after:@release-it/conventional-changelog:release":
			"echo 'after:@release-it/conventional-changelog:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:bump":
			"echo 'after:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:git:bump":
			"echo 'after:git:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:git:init": "echo 'after:git:init'",
		"after:git:release":
			"echo 'after:git:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:github:bump":
			"echo 'after:github:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:github:init": "echo 'after:github:init'",
		"after:github:release":
			"echo 'after:github:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:init": "echo 'after:init'",
		"after:release":
			"echo 'after:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:version:bump":
			"echo 'after:version:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"after:version:init": "echo 'after:version:init'",
		"after:version:release":
			"echo 'after:version:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:@release-it/conventional-changelog:bump":
			"echo 'before:@release-it/conventional-changelog:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:@release-it/conventional-changelog:init":
			"echo 'before:@release-it/conventional-changelog:init'",
		"before:@release-it/conventional-changelog:release":
			"echo 'before:@release-it/conventional-changelog:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:bump":
			"echo 'before:bump' && git switch -c 'release/${version}' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:git:bump":
			"echo 'before:git:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:git:init": "echo 'before:git:init'",
		"before:git:release":
			"echo 'before:git:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:github:bump":
			"echo 'before:github:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:github:init": "echo 'before:github:init'",
		"before:github:release":
			"echo 'before:github:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:init": "echo 'before:init'",
		"before:release":
			"echo 'before:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:version:bump":
			"echo 'before:version:bump' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
		"before:version:init": "echo 'before:version:init'",
		"before:version:release":
			"echo 'before:version:release' && echo 'version: ${version}, latestVersion: ${latestVersion}, name: ${name}, branchName: ${branchName}'",
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
