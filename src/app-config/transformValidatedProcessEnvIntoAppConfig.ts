import type {AppConfig} from "./AppConfig.js";
import type {ValidatedProcessEnv} from "./ValidatedProcessEnv.js";

export function transformValidatedProcessEnvIntoAppConfig(
	validatedProcessEnv: ValidatedProcessEnv,
): AppConfig {
	return {
		helloMessage: validatedProcessEnv.OPTIONAL_HELLO_MESSAGE,
	};
}
