import {str} from "envalid";

export const dotEnvSchema = {
	OPTIONAL_HELLO_MESSAGE: str({
		default: "Hello world!",
	}),
	// REQUIRED_HELLO_MESSAGE: str(),
} as const;
