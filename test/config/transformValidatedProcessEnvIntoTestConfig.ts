import type {TestConfig} from "./TestConfig.js";
import type {ValidatedProcessEnv} from "./ValidatedProcessEnv.js";

export function transformValidatedProcessEnvIntoTestConfig(
	validatedProcessEnv: ValidatedProcessEnv,
): TestConfig {
	return {
		alpineVersion: validatedProcessEnv.ALPINE_VERSION,
		nodejsVersion: validatedProcessEnv.NODEJS_VERSION,
	};
}
