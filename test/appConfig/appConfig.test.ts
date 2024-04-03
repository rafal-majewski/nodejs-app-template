import {loadAppConfig} from "../../src/appConfig/loadAppConfig.js";
import {loadDotEnv} from "../../src/appConfig/loadDotEnv.js";
import * as Path from "path";
import * as Url from "url";
import {describe, test, expect} from "vitest";

describe("appConfig", (): void => {
	describe("appConfig", (): void => {
		test("OPTIONAL_HELLO_MESSAGE", (): void => {
			const dotEnvPath = Path.resolve(
				Url.fileURLToPath(Path.dirname(import.meta.url)),
				".env.test",
			);

			const dotEnv = loadDotEnv(dotEnvPath);
			const appConfig = loadAppConfig(dotEnv);
			expect(appConfig.helloMessage).toBe("Hello developer");
		});
	});
});
