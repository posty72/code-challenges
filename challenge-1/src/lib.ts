export function sumOfNumbersClosestToZero(numbers: number[]) {
  let closestToZero: number | null = null;

  for (let indexA = 0; indexA < numbers.length; indexA++) {
    for (let indexB = 0; indexB < numbers.length; indexB++) {
      if (indexB === indexA) {
        continue;
      }

      const sum = numbers[indexA] + numbers[indexB];

      if (sum === 0) {
        return 0;
      }

      if (
        closestToZero === null ||
        (sum > 0 && sum < closestToZero) ||
        (sum < 0 && sum > closestToZero)
      ) {
        closestToZero = sum;
      }
    }
  }

  if (closestToZero === null) {
    throw new Error("Something went wrong! Did you pass an empty array?");
  }

  return closestToZero;
}
