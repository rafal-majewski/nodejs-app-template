import {cleanEnv} from "envalid";
import {appConfigSchema} from "./appConfigSchema.js";

export function loadAppConfig(dotEnv: {readonly [key: string]: string}) {
	const appConfig = cleanEnv(dotEnv, appConfigSchema);
	return appConfig;
}
