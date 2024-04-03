export class Hello {
	public constructor(message: string) {
		this.message = message;
	}

	public getMessage(): string {
		return this.message;
	}

	private readonly message: string;
}
