import * as Test from "node:test";
import * as Testcontainers from "testcontainers";
const dockerImageNodeVersion = "22.2.0";

await Test.describe("Docker image", async (): Promise<void> => {
	await Test.it("builds", async (): Promise<void> => {
		await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();
	});
});

await Test.describe("Docker container", async (): Promise<void> => {
	await Test.it("starts", async (): Promise<void> => {
		const container = await new Testcontainers.GenericContainerBuilder(".", "Dockerfile")
			.withBuildArgs({
				NODE_VERSION: dockerImageNodeVersion,
			})
			.build();

		await container.start();
	});
});
