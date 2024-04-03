import {convertSecondsToMiliseconds} from "./utils/convertSecondsToMiliseconds.js";
import * as Testcontainers from "testcontainers";
import {describe, test} from "vitest";
const dockerImageNodeVersion = "20.9.0";
const timeoutSeconds = 100;

describe("Docker image", (): void => {
	test(
		"builds",
		async (): Promise<void> => {
			await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
				.withBuildArgs({
					NODE_VERSION: dockerImageNodeVersion,
				})
				.build();
		},
		convertSecondsToMiliseconds(timeoutSeconds),
	);
});

describe("Docker container", (): void => {
	test(
		"starts",
		async (): Promise<void> => {
			const container = await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
				.withBuildArgs({
					NODE_VERSION: dockerImageNodeVersion,
				})
				.build();

			await container.start();
		},
		convertSecondsToMiliseconds(timeoutSeconds),
	);
});
