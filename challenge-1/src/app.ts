import { sumOfNumbersClosestToZero } from "./lib";

const input1 = [-8, -66, -60];
const output1 = sumOfNumbersClosestToZero(input1);
showInputOutput(input1, output1);

const input2 = [-21, -67, -37, -18, 4, -65];
const output2 = sumOfNumbersClosestToZero(input2);
showInputOutput(input2, output2);

const input3 = [10, 4, -7, 12, -9, 1];
const output3 = sumOfNumbersClosestToZero(input3);
showInputOutput(input3, output3);

function showInputOutput(input: number[], output: number) {
  // eslint-disable-next-line no-console
  console.log(`Input: [${input.join(", ")}], Output: ${output}`);
}
