export const addLeadingZeros = (num, totalLength = 4) => {
  return String(num).padStart(totalLength, "0");
};
