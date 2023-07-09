/**
 * convert ISO 8601 format to be human readable format (ddd, MMM d, yyyy, hh:mm a zzz)
 * for example '2018-07-01T12:00:00-04:00' turns SAT, JUL 1, 2018, 12:00 PM PDT
 *
 */
const convertDate = (timestamp: Date) => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const formattedDate = `${date.toLocaleDateString(
    "en-US",
    options
  )}, ${date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  })} PDT`.toUpperCase();
  return formattedDate;
};

export default convertDate;
