export class StringNumberCalculator {
	add(input: string): number {
		let sum = 0;
		if(!input.trim()) {
			return sum;
		}
		let delimiterPattern = /[\n,]+/;
		let delimiter;
		const singleCharacterDelimiterMatch = input.match(/^\/\/(.)\n/);
		const multiCharacterDelimiterMatch = input.match(/^\/\/(\[.*?\])\n/);
		if(multiCharacterDelimiterMatch) {
			delimiter = multiCharacterDelimiterMatch[1]?.slice(1, -1);
			input = input.replace(multiCharacterDelimiterMatch[0], '');
		}
    if (singleCharacterDelimiterMatch) {
      delimiter = singleCharacterDelimiterMatch[1];
      input = input.replace(singleCharacterDelimiterMatch[0], '');
    }
		const negativeInputNumbers: number[] = [];
		const inputNumbers = input.split(delimiter || delimiterPattern).map(inputNumber => {
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