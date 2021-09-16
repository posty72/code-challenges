export function sumOfNumbersClosestToZero(numbers: number[]) {
  let closestToZero: number = numbers[0] + numbers[1];

  for (let a = 0; a < numbers.length; a++) {
    for (let b = a + 1; b < numbers.length; b++) {
      const sum = numbers[a] + numbers[b];

      if (sum === 0) {
        return 0;
      }

      if (
        (sum > 0 && sum < closestToZero) ||
        (sum < 0 && sum > closestToZero)
      ) {
        closestToZero = sum;
      }
    }
  }

  return closestToZero;
}
