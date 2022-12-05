import {cleanEnv} from "envalid";
import appConfigSchema from "./appConfigSchema.js";

const appConfig = cleanEnv(process.env, appConfigSchema);

export default appConfig;
