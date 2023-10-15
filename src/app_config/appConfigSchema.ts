import {str} from "envalid";

export const appConfigSchema = {
	OPTIONAL_HELLO_MESSAGE: str({default: "Hello World!"}),
	// REQUIRED_HELLO_MESSAGE: str(),
};
