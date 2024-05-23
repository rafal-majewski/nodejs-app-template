import type {ValidatedProcessEnv} from "./ValidatedProcessEnv.js";
import {processEnvSchema} from "./processEnvSchema.js";
import * as Envalid from "envalid";

export function validateProcessEnv(processEnv: Readonly<NodeJS.ProcessEnv>): ValidatedProcessEnv {
	return Envalid.cleanEnv(processEnv, processEnvSchema);
}
