import type {TestConfig} from "./TestConfig.js";
import {transformValidatedProcessEnvIntoTestConfig} from "./transformValidatedProcessEnvIntoTestConfig.js";
import {validateProcessEnv} from "./validateProcessEnv.js";

export function loadTestConfig(processEnv: Readonly<NodeJS.ProcessEnv>): TestConfig {
	const validatedProcessEnv = validateProcessEnv(processEnv);
	return transformValidatedProcessEnvIntoTestConfig(validatedProcessEnv);
}
