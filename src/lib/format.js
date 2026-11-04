// e.g. "Dec 2022"; UTC because the schema parses ISO dates as UTC midnight
export const formatDate = (date) =>
  date.toLocaleDateString("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
