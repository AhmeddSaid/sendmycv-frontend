export function validateSentenceByLength(input: string, count: number = 30) {
	const letterCount = JSON.stringify(input).replace(/[^a-zA-Z]/g, "").length;
	return letterCount >= count;
}
