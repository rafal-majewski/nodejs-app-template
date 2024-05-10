import type {ReadonlyProcessEnv} from "./ReadonlyProcessEnv.js";
import {loadAppConfig} from "./loadAppConfig.js";
import {describe, test, expect} from "vitest";

describe("app-config", (): void => {
	describe("loadAppConfig", (): void => {
		test("Loads the app config from the given process environment", (): void => {
			const provessEnv: ReadonlyProcessEnv = {
				OPTIONAL_HELLO_MESSAGE: "Hello developer",
			};

			const appConfig = loadAppConfig(provessEnv);
			expect(appConfig.helloMessage).toBe("Hello developer");
		});
	});
});
