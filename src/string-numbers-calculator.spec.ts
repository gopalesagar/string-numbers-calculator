import { randomBytes } from 'crypto';
import { StringNumberCalculator } from '../src/string-numbers-calculator';

describe('String Calculator', () => {
  let calculator: StringNumberCalculator;

  beforeEach(() => {
    // Arrange
    calculator = new StringNumberCalculator();
  });

  it('should have an add function', () => {
    // Assert
    expect(calculator.add).toBeDefined();
    expect(typeof calculator.add).toBe('function');
  });

  describe('add function > ', () => {
    describe('positive scenarios > ', () => {
      it('should return 0 if empty string is received', () => {
        // Act
        const sum = calculator.add('');

        // Assert
        expect(sum).toEqual(0);
      });

      it('should return 0 if string with only spaces is provided', () => {
        // Act
        const sum = calculator.add('  ');

        // Assert
        expect(sum).toEqual(0);
      });

      it('should return the number as the resulting sum, if single number is provided in string', () => {
        // Act
        const sum = calculator.add('5');

        // Assert
        expect(sum).toEqual(5);
      });

      it('should return the number as the resulting sum, if the string has only one number and additional delimeters separating empty values', () => {
        // Act
        const sum = calculator.add('\n9,,');

        // Assert
        expect(sum).toEqual(9);
      });

      it('should return the sum correctly if 2 numbers are provided in a string', () => {
        // Act
        const sum = calculator.add('5, 6');

        // Assert
        expect(sum).toEqual(11);
      });

      it('should return the sum correctly if 2 numbers are provided with additional delimeters separating empty values', () => {
        // Act
        const sum = calculator.add('5,\n,,6,\n\n,');

        // Assert
        expect(sum).toEqual(11);
      });

      it('should return the sum correctly if 2 numbers are provided with additional delimeters and values with empty spaces', () => {
        // Act
        const sum = calculator.add('5,\n, ,6,\n \n,');

        // Assert
        expect(sum).toEqual(11);
      });

      it('should return the sum correctly if positive decimal numbers are provided in the string', () => {
        // Act
        const sum = calculator.add('5.3,\n, ,6.2,\n \n,3,0.9');

        // Assert
        expect(sum).toEqual(15.4);
      });

      it('should accept delimiter change in the format //;\n1;2 and return sum of the numnbers in string', () => {
        // Arrange
        const input = '//;\n1;2;3';

        // Act
        const sum = calculator.add(input);

        // Assert
        expect(sum).toEqual(6);
      });

      it('should ignore numbers greater than 1000 if any present in the input', () => {
        // Arrange
        const input = '//;\n1;2000;3;1000';

        // Act
        const sum = calculator.add(input);

        // Assert
        expect(sum).toEqual(1004);
      });

      it('should accept new delimeter of length more than 1', () => {
        // Arrange
        const input = '//[###]\n1###2000###3###1000';

        // Act
        const sum = calculator.add(input);

        // Assert
        expect(sum).toEqual(1004);
      });

      it('should accept new delimeter containing random characters', () => {
        // Arrange
        const randomDelimiter = randomBytes(5).toString('hex');
        const input = `//[${randomDelimiter}]\n1${randomDelimiter}2000${randomDelimiter}3${randomDelimiter}1000`;

        // Act
        const sum = calculator.add(input);

        // Assert
        expect(sum).toEqual(1004);
      });

      // it('should accept multiple new delimiter', () => {
      // 	// Arrange
      // 	const input = '//[###][$$$]\n1###2000$$$3###1000';

      // 	// Act
      // 	const sum = calculator.add(input);

      // 	// Assert
      // 	expect(sum).toEqual(1004);
      // });
    });

    describe('negative scenarios > ', () => {
      it('should throw error if the input string contains non-numeric values', () => {
        // Act, Assert
        expect(() => {
          calculator.add('5,\n, ,6,\nasd\n,');
        }).toThrow('Invalid string: Non-numeric values detected!');
      });

      it('should throw error if the input string contains negative numbers', () => {
        // Arrange
        const input = '5,\n, ,-6,\n\n,-11,30,\n,,';

        // Act, Assert
        expect(() => {
          calculator.add(input);
        }).toThrow('Negative numbers are not allowed. Negatives found: -6,-11');
      });

      it('should throw error if the new delimiter does not match the delimiters in the string', () => {
        // Arrange
        const input = '//;\n1;2,3;4;10';

        // Act, Assert
        expect(() => {
          calculator.add(input);
        }).toThrow('Invalid string: Non-numeric values detected!');
      });
    });
  });
});
