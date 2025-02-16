export class StringNumberCalculator {
	add(input: string): number {
		let sum = 0;
		if(!input) {
			return sum;
		}
		const delimeterPattern = /[\n,]+/;
		const inputNumbers = input.split(delimeterPattern).map(Number);

		for(let i = 0; i < inputNumbers.length; i++) {
			sum = sum + inputNumbers[i];
		}
		return sum;
	}
}