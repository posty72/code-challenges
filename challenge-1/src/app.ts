import { sumOfNumbersClosestToZero } from "./lib";

main();

function main() {
  runExample1();
  runExample2();
  runExample3();
}

function runExample1() {
  const input = [-8, -66, -60];
  const output = sumOfNumbersClosestToZero(input);

  showInputOutput(input, output);
}
function runExample2() {
  const input = [-21, -67, -37, -18, 4, -65];
  const output = sumOfNumbersClosestToZero(input);

  showInputOutput(input, output);
}
function runExample3() {
  const input = [10, 4, -7, 12, -9, 1];
  const output = sumOfNumbersClosestToZero(input);

  showInputOutput(input, output);
}

function showInputOutput(input: number[], output: number) {
  // eslint-disable-next-line no-console
  console.log(`Input: [${input.join(", ")}], Output: ${output}`);
}
