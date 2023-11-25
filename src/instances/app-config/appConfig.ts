import {loadAppConfig} from "../../app-config/loadAppConfig.js";
import {loadDotEnv} from "../../app-config/loadDotEnv.js";
import * as path from "path";

const dotEnvPath = path.resolve(process.cwd(), ".env");
const dotEnv = loadDotEnv(dotEnvPath);
export const appConfig = loadAppConfig(dotEnv);
