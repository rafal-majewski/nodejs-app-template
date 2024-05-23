import type {processEnvSchema} from "./processEnvSchema.js";
import type * as Envalid from "envalid";

export type ValidatedProcessEnv = Omit<
	ReturnType<typeof Envalid.cleanEnv<typeof processEnvSchema>>,
	"isDev" | "isDevelopment" | "isProd" | "isProduction" | "isTest"
>;
