/**
 * Convert the date format of YYYY-MM-DD to American writing
 * @param date The date in format of YYYY-MM-DD.
 */
export const normalizeDate = (date: string = "1970-01-01"): string => {
  let [year, month, day] = date.split("-");
  let month_num = parseInt(month);
  let day_num = parseInt(day);
  const month_en: {
    [index: number]: string;
  } = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return `${month_en[month_num]} ${day_num}, ${year}`;
};

export const getCurrentTime = (): {
  year: string;
  month: string;
  day: string;
  hours: string;
  minutes: string;
  seconds: string;
} => {
  const today = new Date();
  return {
    year: today.getFullYear().toString(),
    month: String(today.getMonth() + 1).padStart(2, "0"),
    day: String(today.getDate()).padStart(2, "0"),
    hours: String(today.getHours()).padStart(2, "0"),
    minutes: String(today.getMinutes()).padStart(2, "0"),
    seconds: String(today.getSeconds()).padStart(2, "0"),
  };
};
