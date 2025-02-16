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
	});
});