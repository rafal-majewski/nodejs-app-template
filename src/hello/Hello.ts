export class Hello {
	private readonly message: string;
	public constructor(message: string) {
		this.message = message;
	}
	public getMessage(): string {
		return this.message;
	}
}
