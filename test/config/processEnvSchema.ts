import * as Envalid from "envalid";

export const processEnvSchema = {
	ALPINE_VERSION: Envalid.str(),
	NODEJS_VERSION: Envalid.str(),
} as const;
