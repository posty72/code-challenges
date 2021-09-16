import { sumOfNumbersClosestToZero } from "./lib";

describe("Code Challenge 1", () => {
  it("works with example 1", () => {
    // Arrange
    const input = [-8, -66, -60];
    // Act
    const result = sumOfNumbersClosestToZero(input);
    // Assert
    expect(result).toBe(-68);
  });

  it("works with example 2", () => {
    // Arrange
    const input = [-21, -67, -37, -18, 4, -65];
    // Act
    const result = sumOfNumbersClosestToZero(input);
    // Assert
    expect(result).toBe(-14);
  });

  it("works with example 3", () => {
    // Arrange
    const input = [10, 4, -7, 12, -9, 1];
    // Act
    const result = sumOfNumbersClosestToZero(input);
    // Assert
    expect(result).toBe(1);
  });
});

describe("Extra tests", () => {
  it("works with numbers that should be 0", () => {
    // Arrange
    const input = [10, 4, -7, 12, -10, 1];
    // Act
    const result = sumOfNumbersClosestToZero(input);
    // Assert
    expect(result).toBe(0);
  });

  it("works with numbers that are not unique", () => {
    // Arrange
    const input = [10, -10];
    // Act
    const result = sumOfNumbersClosestToZero(input);
    // Assert
    expect(result).toBe(0);
  });
});
