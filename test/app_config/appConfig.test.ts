import {describe, test, expect} from "vitest";
import * as path from "path";
import * as url from "url";

import {loadAppConfig} from "../../src/app_config/loadAppConfig.js";
import {loadDotEnv} from "../../src/app_config/loadDotEnv.js";

describe("app-config", () => {
	describe("appConfig", () => {
		test("OPTIONAL_HELLO_MESSAGE", () => {
			const dotEnvPath = path.resolve(
				url.fileURLToPath(path.dirname(import.meta.url)),
				".env.test",
			);
			const dotEnv = loadDotEnv(dotEnvPath);
			const appConfig = loadAppConfig(dotEnv);
			expect(appConfig.OPTIONAL_HELLO_MESSAGE).toBe("Hello developer");
		});
	});
});
