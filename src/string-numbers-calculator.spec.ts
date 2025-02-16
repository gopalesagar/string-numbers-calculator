import { StringNumberCalculator } from "../src/string-numbers-calculator";

describe("String Calculator", () => {
  let calculator: StringNumberCalculator;

  beforeEach(() => {
		// Arrange
    calculator = new StringNumberCalculator();
  });

	it("should have an add function", () => {
		// Assert
    expect(calculator.add).toBeDefined();
    expect(typeof calculator.add).toBe("function");
  });

	describe("add function > ", () => {
		it("should return 0 if empty string is received", () => {
			// Act
			const sum = calculator.add('');

			// Assert
			expect(sum).toEqual(0);
		});

		it("should return the number as is if single number is provided in string", () => {
			// Act
			const sum = calculator.add('5');

			// Assert
			expect(sum).toEqual(5);
		});
	});
});