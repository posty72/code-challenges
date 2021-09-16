const MAX_HOURS_TO_SHOW = 2 as const;
const ESTIMATE_INCREMENTS = 5 as const;

const MILLISECONDS_IN_SECOND = 1000 as const;
const SECONDS_IN_MINUTE = 60 as const;
const MINUTES_IN_HOUR = 60 as const;

const HOUR_UNIT = "h" as const;
const MINUTE_UNIT = "min" as const;

const roundDownTo = (increment: number) => (value: number) =>
  Math.floor(value / increment) * increment;

const roundDownToIncrement = roundDownTo(ESTIMATE_INCREMENTS);
const roundDownToWhole = roundDownTo(1);

const toMinutes = (milliseconds: number) =>
  roundDownToIncrement(
    milliseconds / MILLISECONDS_IN_SECOND / SECONDS_IN_MINUTE
  ) % SECONDS_IN_MINUTE;
const toHours = (milliseconds: number) =>
  roundDownToWhole(
    (milliseconds /
      MILLISECONDS_IN_SECOND /
      SECONDS_IN_MINUTE /
      MINUTES_IN_HOUR) %
      MINUTES_IN_HOUR
  );

const stripZeroValues = (time: string) =>
  time.replace(` 0${MINUTE_UNIT}`, "").replace(`0${HOUR_UNIT} `, "");

const stripUnits = (
  from: string,
  to: string,
  unitToCheck: string,
  unitToStrip: string
) =>
  !to.includes(unitToCheck) && !from.includes(unitToCheck)
    ? from.replace(unitToStrip, "")
    : from;

export function formatEstimatedWaitTime(
  current: string,
  lowerBoundEstimate: string,
  upperBoundEstimate: string
) {
  const currentTime = new Date(current).valueOf();
  const upper = new Date(upperBoundEstimate).valueOf();
  const lower = new Date(lowerBoundEstimate).valueOf();

  if (!upper || !lower || !currentTime) {
    throw new Error("Please make sure inputs are valid dates");
  }

  // Assume parameters passed in have been determined correctly
  if (upper < lower) {
    throw new Error("Upper bound is lower than expected lower bound");
  }

  const upperDifference = upper - currentTime;
  const lowerDifference = lower - currentTime;

  if (upperDifference <= 0) {
    return "as soon as possible";
  }

  const lowHours = Math.min(toHours(lowerDifference), MAX_HOURS_TO_SHOW);
  const upperHours = Math.min(toHours(upperDifference), MAX_HOURS_TO_SHOW);
  const lowMinutes = toMinutes(lowerDifference);
  const upperMinutes = toMinutes(upperDifference);

  let to = stripZeroValues(
    `${upperHours}${HOUR_UNIT} ${upperMinutes}${MINUTE_UNIT}`
  );

  if (upperHours === MAX_HOURS_TO_SHOW) {
    to = `${upperHours}${HOUR_UNIT}`;
  }

  let from = stripZeroValues(
    `${lowHours}${HOUR_UNIT} ${lowMinutes}${MINUTE_UNIT}`
  );

  if (lowerDifference <= 0 || from === to) {
    return to;
  }

  from = stripUnits(from, to, HOUR_UNIT, MINUTE_UNIT);
  from = stripUnits(from, to, MINUTE_UNIT, HOUR_UNIT);

  return `${from} - ${to}`;
}
