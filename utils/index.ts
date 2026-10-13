// e.g. "22-12-2022" -> "Dec 2022", same style as the Work page dates
export const formatDate = (d: string) => {
  const [, mm, yyyy] = d.split("-").map(Number);
  return new Date(yyyy, mm - 1).toLocaleString("en", {
    month: "short",
    year: "numeric",
  });
};

// for sorting posts newest first
export const toTime = (d: string) => {
  const [dd, mm, yyyy] = d.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd).getTime();
};
