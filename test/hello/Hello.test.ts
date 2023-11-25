import {Hello} from "../../src/hello/Hello.js";
import {describe, test, expect} from "vitest";

describe("hello", () => {
	describe("Hello", () => {
		describe("getMessage", () => {
			test('should return "Hello World"', () => {
				const hello = new Hello("Hello world");
				expect(hello.getMessage()).toBe("Hello world");
			});
		});
	});
});
