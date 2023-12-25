/**
 * Convert the date format of YYYY-MM-DD to American writing
 * @param date The date in format of YYYY-MM-DD.
 */
export const normalizeDate = (date: string): string => {
  if (date == null) return "01 January, 1970";
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
  return `${day_num} ${month_en[month_num]}, ${year}`;
};
