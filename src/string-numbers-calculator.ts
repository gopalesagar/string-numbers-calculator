export class StringNumberCalculator {
	add(input: string): number {
		let sum = 0;
		if(!input.trim()) {
			return sum;
		}
		let delimiterPattern = /[\n,]+/;

		const singleCharacterDelimiterMatch = input.match(/^\/\/(.)\n/);
		const multiCharacterDelimiterMatch = input.match(/^\/\/(\[.*?\])\n/);
		if(multiCharacterDelimiterMatch) {
			const multiCharacterDelimiter = multiCharacterDelimiterMatch[1]?.slice(1, -1);
			delimiterPattern = new RegExp(`[${multiCharacterDelimiter}\n]+`);
			input = input.replace(multiCharacterDelimiterMatch[0], '');
		}
    if (singleCharacterDelimiterMatch) {
      delimiterPattern = new RegExp(`[${singleCharacterDelimiterMatch[1]}\n]+`);
      input = input.replace(singleCharacterDelimiterMatch[0], '');
    }
		const negativeInputNumbers: number[] = [];
		const inputNumbers = input.split(delimiterPattern).map(inputNumber => {
			if(Number.isNaN(Number(inputNumber))) throw new Error('Invalid string: Non-numeric values detected!');
			const result = Number(inputNumber);
			if(result < 0) negativeInputNumbers.push(result);
			return result;
		});

		if(negativeInputNumbers && negativeInputNumbers.length > 0) {
			throw new Error(`Negative numbers are not allowed. Negatives found: ${negativeInputNumbers.join(',')}`);
		}

		for(let i = 0; i < inputNumbers.length; i++) {
			if(inputNumbers[i] <= 1000) {
				sum = sum + inputNumbers[i];
			}
		}
		return sum;
	}
}