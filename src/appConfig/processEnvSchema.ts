import * as Envalid from "envalid";

export const processEnvSchema = {
	OPTIONAL_HELLO_MESSAGE: Envalid.str({
		default: "Hello world!",
	}),
	// REQUIRED_HELLO_MESSAGE: str(),
} as const;
