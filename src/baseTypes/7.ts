enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wedneday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: Day): boolean => {
  return day === Day.Saturday || day === Day.Sunday;
};

isWeekend(Day.Wednesday);
isWeekend(Day.Saturday);
