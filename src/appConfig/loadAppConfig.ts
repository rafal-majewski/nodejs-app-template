import type {AppConfig} from "./AppConfig.ts";
import type {ReadonlyProcessEnv} from "./ReadonlyProcessEnv.js";
import {transformValidatedProcessEnvIntoAppConfig} from "./transformValidatedProcessEnvIntoAppConfig.js";
import {validateProcessEnv} from "./validateProcessEnv.js";

export function loadAppConfig(processEnv: ReadonlyProcessEnv): AppConfig {
	const validatedProcessEnv = validateProcessEnv(processEnv);
	console.log("validatedProcessEnv", validatedProcessEnv);
	return transformValidatedProcessEnvIntoAppConfig(validatedProcessEnv);
}
