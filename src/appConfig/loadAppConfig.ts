import type {AppConfig} from "./AppConfig.ts";
import type {DotEnv} from "./DotEnv.ts";
import {dotEnvSchema} from "./dotEnvSchema.js";
import * as Envalid from "envalid";

export function loadAppConfig(dotEnv: DotEnv): AppConfig {
	const validatedDotEnv = Envalid.cleanEnv(dotEnv, dotEnvSchema);

	return {
		helloMessage: validatedDotEnv.OPTIONAL_HELLO_MESSAGE,
	};
}
