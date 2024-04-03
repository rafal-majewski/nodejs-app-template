import type {DotEnv} from "./DotEnv.ts";
import * as Dotenv from "dotenv";

export function loadDotEnv(path: string): DotEnv {
	const dotEnv: DotEnv = {};

	Dotenv.config({
		path,
		processEnv: dotEnv,
	});

	return dotEnv;
}
