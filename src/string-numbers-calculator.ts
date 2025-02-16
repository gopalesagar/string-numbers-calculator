export class StringNumberCalculator {
	add(input: string): number {
		let sum = 0;
		if(!input.trim()) {
			return sum;
		}
		let delimiterPattern = /[\n,]+/;

		const inputNumbers = input.split(delimiterPattern).map(Number);

		for(let i = 0; i < inputNumbers.length; i++) {
			sum = sum + inputNumbers[i];
		}
		if(Number.isNaN(sum)) {
			throw new Error('Invalid string: Non-numeric values detected!');
		}
		return sum;
	}
}