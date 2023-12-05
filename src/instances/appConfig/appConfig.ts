import {loadAppConfig} from "../../appConfig/loadAppConfig.js";
import {loadDotEnv} from "../../appConfig/loadDotEnv.js";
import * as path from "path";

const dotEnvPath = path.resolve(process.cwd(), ".env");
const dotEnv = loadDotEnv(dotEnvPath);
export const appConfig = loadAppConfig(dotEnv);
