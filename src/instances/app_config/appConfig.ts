import * as path from "path";
import {loadAppConfig} from "src/app_config/loadAppConfig.js";
import {loadDotEnv} from "src/app_config/loadDotEnv.js";

const dotEnvPath = path.resolve(process.cwd(), ".env");
const dotEnv = loadDotEnv(dotEnvPath);
export const appConfig = loadAppConfig(dotEnv);
