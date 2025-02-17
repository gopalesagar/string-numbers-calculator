# StringNumberCalculator

The `StringNumberCalculator` class is designed to process a string containing numbers separated by delimiters, calculate the sum of the numbers, and handle edge cases like negative numbers and delimiters of varying lengths. This calculator supports both single character and multi-character delimiters.

## Features
- **Sum of Numbers**: The primary functionality of the class is to calculate the sum of numbers present in the input string.
- **Custom Delimiters**: The class supports custom delimiters specified at the beginning of the input string.
  - Single character delimiters, e.g., `//;\n`
  - Multi-character delimiters enclosed in square brackets, e.g., `//[***]\n`
- **Handling Negative Numbers**: If the input contains negative numbers, it will throw an error with details of the negative numbers found.
- **Ignore Numbers Greater Than 1000**: Numbers greater than 1000 are ignored in the sum calculation.

## Method: `add(input: string): number`

### Description:
The `add` method takes an input string and returns the sum of the numbers in the string, with the following conditions:
- Numbers are separated by delimiters (either single or multi-character).
- Custom delimiters are allowed, specified at the beginning of the input string.
- Handles negative numbers by throwing an error if found.
- Ignores numbers greater than 1000.

### Parameters:
- `input` (string): A string containing numbers separated by delimiters. The format can include custom delimiters defined at the beginning (optional).

### Returns:
- `number`: The sum of the numbers in the string, excluding negative numbers and numbers greater than 1000.

### Example Usage:

```typescript
const calculator = new StringNumberCalculator();
const result = calculator.add('//;\n1;2;3\n4');
console.log(result);  // Output: 10 (1 + 2 + 3 + 4)
