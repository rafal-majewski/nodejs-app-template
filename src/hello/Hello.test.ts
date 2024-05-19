import {Hello} from "./Hello.js";
import * as Assert from "node:assert";
import * as Test from "node:test";

await Test.describe("hello", async (): Promise<void> => {
	await Test.describe("Hello", async (): Promise<void> => {
		await Test.describe("getMessage", async (): Promise<void> => {
			await Test.it('should return "Hello World"', (): void => {
				const hello = new Hello("Hello world");
				Assert.strictEqual(hello.getMessage(), "Hello world");
			});
		});
	});
});
