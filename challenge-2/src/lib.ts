const MAX_HOURS_TO_SHOW = 2 as const;
const ESTIMATE_INCREMENTS = 5 as const;

const MILLISECONDS_IN_SECOND = 1000 as const;
const SECONDS_IN_MINUTE = 60 as const;
const MINUTES_IN_HOUR = 60 as const;

const HOUR_UNIT = "h" as const;
const MINUTE_UNIT = "min" as const;

interface Time {
  hours: number;
  minutes: number;
}

const roundDownToNearestIncrement = (minutes: number) =>
  Math.floor(minutes / ESTIMATE_INCREMENTS) * ESTIMATE_INCREMENTS;

export function formatEstimatedWaitTime(
  current: string,
  lowerBoundEstimate: string,
  upperBoundEstimate: string
) {
  const currentTime = new Date(current).valueOf();
  const upper = new Date(upperBoundEstimate).valueOf();
  const lower = new Date(lowerBoundEstimate).valueOf();

  // Assume parameters passed in have been determined correctly
  if (upper < lower) {
    throw new Error("Upper bound is lower than expected lower bound");
  }

  const upperDifference = upper - currentTime;
  const lowerDifference = lower - currentTime;

  if (upperDifference <= 0) {
    return "as soon as possible";
  }

  const to = parseSecondsAsTime(upperDifference);
  const from = parseSecondsAsTime(lowerDifference);
  const toWithUnits = formatTimeWithUnits(to);

  if (lowerDifference <= 0) {
    return toWithUnits;
  }

  // to & from are the same
  if (from.hours === to.hours && from.minutes === to.minutes) {
    return toWithUnits;
  }

  const showMinuteInFrom = to.hours !== from.hours;
  const showHourInFrom = to.minutes !== from.minutes;
  const fromWithUnits = formatTimeWithUnits(
    from,
    showHourInFrom,
    showMinuteInFrom
  );

  return `${fromWithUnits} - ${toWithUnits}`;
}

function formatTimeWithUnits(
  { hours, minutes }: Time,
  showHour = true,
  showMinute = true
) {
  const hourUnit = showHour ? HOUR_UNIT : "";
  const minuteUnit = showMinute ? MINUTE_UNIT : "";

  const formattedHour = hours + hourUnit;
  const formattedMinute = minutes + minuteUnit;

  if (hours <= 0) {
    return formattedMinute;
  }

  if (minutes > 0 && minutes < MINUTES_IN_HOUR) {
    return `${formattedHour} ${formattedMinute}`;
  }

  return formattedHour;
}

function parseSecondsAsTime(milliseconds: number): Time {
  const totalMinutes = roundDownToNearestIncrement(
    milliseconds / MILLISECONDS_IN_SECOND / SECONDS_IN_MINUTE
  );
  const totalHours = Math.floor(totalMinutes / MINUTES_IN_HOUR);

  const hours = Math.min(totalHours, MAX_HOURS_TO_SHOW);
  const minutes = totalMinutes - hours * MINUTES_IN_HOUR;

  if (hours <= 0) {
    return { minutes, hours: 0 };
  }

  const result = { hours, minutes: 0 };

  if (minutes < MINUTES_IN_HOUR) {
    result.minutes = minutes;
  }

  return result;
}
