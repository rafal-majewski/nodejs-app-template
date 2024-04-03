import {loadAppConfig} from "../../appConfig/loadAppConfig.js";
import {loadDotEnv} from "../../appConfig/loadDotEnv.js";
import * as Path from "path";
const dotEnvPath = Path.resolve(process.cwd(), ".env");
const dotEnv = loadDotEnv(dotEnvPath);
export const appConfig = loadAppConfig(dotEnv);
