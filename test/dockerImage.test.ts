import {testConfig} from "./instances/testConfig.js";
import * as Test from "node:test";
import * as Testcontainers from "testcontainers";

await Test.describe("Docker image", async (): Promise<void> => {
	await Test.it("builds", async (): Promise<void> => {
		await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				ALPINE_VERSION: testConfig.alpineVersion,
				NODEJS_VERSION: testConfig.nodejsVersion,
			})
			.build();
	});
});

await Test.describe("Docker container", async (): Promise<void> => {
	await Test.it("starts", async (): Promise<void> => {
		const container = await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				ALPINE_VERSION: testConfig.alpineVersion,
				NODEJS_VERSION: testConfig.nodejsVersion,
			})
			.build();

		await container.start();
	});
});
