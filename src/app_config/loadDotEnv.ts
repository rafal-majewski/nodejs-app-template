import * as dotenv from "dotenv";

export function loadDotEnv(path: string) {
	const dotEnv: {readonly [key: string]: string} = {};
	dotenv.config({
		path,
		processEnv: dotEnv,
	});
	return dotEnv;
}
