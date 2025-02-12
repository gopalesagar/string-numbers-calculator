import { StringNumberCalculator } from "../src/string-numbers-calculator";

describe("String Calculator", () => {
  let calculator: StringNumberCalculator;

  beforeEach(() => {
    calculator = new StringNumberCalculator();
  });

	it("should have an add function", () => {
    const calculator = new StringNumberCalculator();
    expect(calculator.add).toBeDefined();
    expect(typeof calculator.add).toBe("function");
  });

});