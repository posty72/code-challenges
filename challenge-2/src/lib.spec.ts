import { formatEstimatedWaitTime } from "./lib";

describe("Code Challenge 2", () => {
  it("works with example 1", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T02:02:23.000Z";
    const upperBoundEstimate = "2021-01-10T05:07:22.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("30min - 2h");
  });

  it("works with example 2", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T02:01:11.000Z";
    const upperBoundEstimate = "2021-01-10T02:04:22.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("30min");
  });

  it("works with example 3", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T00:02:23.000Z";
    const upperBoundEstimate = "2021-01-10T02:07:22.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("35min");
  });

  it("works with example 4", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T00:02:23.000Z";
    const upperBoundEstimate = "2021-01-10T00:57:22.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("as soon as possible");
  });
});

describe("Extra tests", () => {
  it('should only show "h" once if both values are hours', () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T02:30:35.000Z";
    const upperBoundEstimate = "2021-01-10T03:30:35.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("1 - 2h");
  });

  it('should only show "min" once if both values are minutes', () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T01:40:35.000Z";
    const upperBoundEstimate = "2021-01-10T02:00:35.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("10 - 30min");
  });

  it("should only show between 1h 45min - 2h", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T03:18:35.000Z";
    const upperBoundEstimate = "2021-01-10T03:30:35.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("1h 45min - 2h");
  });

  it("should both units where needed", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T01:49:35.000Z";
    const upperBoundEstimate = "2021-01-10T03:00:35.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("15min - 1h 30min");
  });

  it("should both units when minutes are available in the upper limit", () => {
    // Arrange
    const time = "2021-01-10T01:30:00.000Z";
    const lowerBoundEstimate = "2021-01-10T02:33:35.000Z";
    const upperBoundEstimate = "2021-01-10T02:50:35.000Z";

    // Act
    const result = formatEstimatedWaitTime(
      time,
      lowerBoundEstimate,
      upperBoundEstimate
    );

    // Assert
    expect(result).toBe("1h - 1h 20min");
  });

  // it("should throw an error if the upper bound is before than the lower bound", () => {
  //   // Arrange
  //   const time = "2021-01-10T01:30:00.000Z";
  //   const lowerBoundEstimate = "2021-01-10T02:50:35.000Z";
  //   const upperBoundEstimate = "2021-01-10T02:33:35.000Z";

  //   // Assert
  //   expect(() => {
  //     formatEstimatedWaitTime(time, lowerBoundEstimate, upperBoundEstimate);
  //   }).toThrow();
  // });
});
