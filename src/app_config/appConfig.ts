import {cleanEnv} from "envalid";
import dotenv from "dotenv";
dotenv.config();
import {appConfigSchema} from "./appConfigSchema.js";

export const appConfig = cleanEnv(process.env, appConfigSchema);
