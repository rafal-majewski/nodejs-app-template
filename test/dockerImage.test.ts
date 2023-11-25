import * as testcontainers from "testcontainers";
import {describe, test} from "vitest";

const dockerImageNodeVersion = "20.9.0";

describe("Docker image", () => {
	test("builds", async () => {
		await new testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();
	}, 100000);
});

describe("Docker container", () => {
	test("starts", async () => {
		const container = await new testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();
		await container.start();
	}, 100000);
});
