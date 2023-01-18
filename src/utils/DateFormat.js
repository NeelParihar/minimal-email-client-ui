export const getFormatedDates = (date) => {
  return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()} ${
    date.getUTCHours() % 12
  }:${date.getUTCMinutes()}${date.getUTCHours() < 12 ? "am" : "pm"}`;
};
