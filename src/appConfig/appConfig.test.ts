import {loadAppConfig} from "./loadAppConfig.js";
import {loadDotEnv} from "./loadDotEnv.js";
import * as Path from "path";
import {describe, test, expect} from "vitest";

describe("appConfig", (): void => {
	describe("appConfig", (): void => {
		test("OPTIONAL_HELLO_MESSAGE", (): void => {
			const dotEnvPath = Path.resolve(".", "test", ".env.test");
			const dotEnv = loadDotEnv(dotEnvPath);
			const appConfig = loadAppConfig(dotEnv);
			expect(appConfig.helloMessage).toBe("Hello developer");
		});
	});
});
