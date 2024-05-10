import type {ReadonlyProcessEnv} from "./ReadonlyProcessEnv.js";
import type {ValidatedProcessEnv} from "./ValidatedProcessEnv.js";
import {processEnvSchema} from "./processEnvSchema.js";
import * as Envalid from "envalid";

export function validateProcessEnv(processEnv: ReadonlyProcessEnv): ValidatedProcessEnv {
	return Envalid.cleanEnv(processEnv, processEnvSchema);
}
