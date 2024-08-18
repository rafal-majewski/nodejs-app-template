import {loadTestConfig} from "../config/loadTestConfig.js";
export const testConfig = loadTestConfig(process.env);
console.log(testConfig);
