import type {AppConfig} from "./AppConfig.ts";
import type {DotEnv} from "./DotEnv.ts";
import {dotEnvSchema} from "./dotEnvSchema.js";
import * as envalid from "envalid";

export function loadAppConfig(dotEnv: DotEnv): AppConfig {
	const validatedDotEnv = envalid.cleanEnv(dotEnv, dotEnvSchema);
	const appConfig: AppConfig = {
		helloMessage: validatedDotEnv.OPTIONAL_HELLO_MESSAGE,
	};
	return appConfig;
}
