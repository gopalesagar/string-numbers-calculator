export class StringNumberCalculator {
	add(input: string): number {
		let sum = 0;
		if(!input.trim()) {
			return sum;
		}
		let delimiterPattern = /[\n,]+/;

		const changeDelimiterMatch = input.match(/^\/\/([^\n]+)\n/);
    if (changeDelimiterMatch) {
      delimiterPattern = new RegExp(`[${changeDelimiterMatch[1]}\n]+`);
      input = input.replace(changeDelimiterMatch[0], '');
    }

		const inputNumbers = input.split(delimiterPattern).map(inputNumber => {
			if(Number.isNaN(Number(inputNumber))) throw new Error('Invalid string: Non-numeric values detected!');
			return Number(inputNumber);
		});

		for(let i = 0; i < inputNumbers.length; i++) {
			sum = sum + inputNumbers[i];
		}
		return sum;
	}
}