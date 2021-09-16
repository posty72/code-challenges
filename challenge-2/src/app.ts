import { formatEstimatedWaitTime } from "./lib";

runExample1();
runExample2();
runExample3();
runExample4();

function runExample1() {
  const time = "2021-01-10T01:30:00.000Z";
  const lowerBoundEstimate = "2021-01-10T02:02:23.000Z";
  const upperBoundEstimate = "2021-01-10T05:07:22.000Z";
  const result = formatEstimatedWaitTime(
    time,
    lowerBoundEstimate,
    upperBoundEstimate
  );

  showInputOutput(time, lowerBoundEstimate, upperBoundEstimate, result);
}

function runExample2() {
  const time = "2021-01-10T01:30:00.000Z";
  const lowerBoundEstimate = "2021-01-10T02:01:11.000Z";
  const upperBoundEstimate = "2021-01-10T02:04:22.000Z";
  const result = formatEstimatedWaitTime(
    time,
    lowerBoundEstimate,
    upperBoundEstimate
  );
  showInputOutput(time, lowerBoundEstimate, upperBoundEstimate, result);
}

function runExample3() {
  const time = "2021-01-10T01:30:00.000Z";
  const lowerBoundEstimate = "2021-01-10T00:02:23.000Z";
  const upperBoundEstimate = "2021-01-10T02:07:22.000Z";
  const result = formatEstimatedWaitTime(
    time,
    lowerBoundEstimate,
    upperBoundEstimate
  );
  showInputOutput(time, lowerBoundEstimate, upperBoundEstimate, result);
}

function runExample4() {
  const time = "2021-01-10T01:30:00.000Z";
  const lowerBoundEstimate = "2021-01-10T00:02:23.000Z";
  const upperBoundEstimate = "2021-01-10T00:57:22.000Z";
  const result = formatEstimatedWaitTime(
    time,
    lowerBoundEstimate,
    upperBoundEstimate
  );

  showInputOutput(time, lowerBoundEstimate, upperBoundEstimate, result);
}

function showInputOutput(
  current: string,
  lowerBoundEstimate: string,
  upperBoundEstimate: string,
  output: string
) {
  // eslint-disable-next-line no-console
  console.log(`
Current time: ${current}, 
Lower bound estimate: ${lowerBoundEstimate}, 
Upper bound estimate: ${upperBoundEstimate}, 

Output: ${output}
----------------
`);
}
