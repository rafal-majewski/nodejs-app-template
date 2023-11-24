import {loadAppConfig} from "../../src/app-config/loadAppConfig.js";
import {loadDotEnv} from "../../src/app-config/loadDotEnv.js";
import * as path from "path";
import * as url from "url";
import {describe, test, expect} from "vitest";

describe("app-config", () => {
	describe("appConfig", () => {
		test("OPTIONAL_HELLO_MESSAGE", () => {
			const dotEnvPath = path.resolve(
				url.fileURLToPath(path.dirname(import.meta.url)),
				".env.test",
			);
			const dotEnv = loadDotEnv(dotEnvPath);
			const appConfig = loadAppConfig(dotEnv);
			expect(appConfig.helloMessage).toBe("Hello developer");
		});
	});
});
