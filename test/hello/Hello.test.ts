import {Hello} from "../../src/hello/Hello.js";
import {describe, test, expect} from "vitest";

describe("hello", (): void => {
	describe("Hello", (): void => {
		describe("getMessage", (): void => {
			test('should return "Hello World"', (): void => {
				const hello = new Hello("Hello world");
				expect(hello.getMessage()).toBe("Hello world");
			});
		});
	});
});
