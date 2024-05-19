import type {ReadonlyProcessEnv} from "./ReadonlyProcessEnv.js";
import {loadAppConfig} from "./loadAppConfig.js";
import * as Assert from "node:assert";
import * as Test from "node:test";

await Test.describe("app-config", async (): Promise<void> => {
	await Test.describe("loadAppConfig", async (): Promise<void> => {
		await Test.it("Loads the app config from the given process environment", (): void => {
			const provessEnv: ReadonlyProcessEnv = {
				OPTIONAL_HELLO_MESSAGE: "Hello developer",
			};

			const appConfig = loadAppConfig(provessEnv);
			Assert.strictEqual(appConfig.helloMessage, "Hello developer");
		});
	});
});
