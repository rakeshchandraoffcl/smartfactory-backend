export const zeroPad = (num, places) => String(num).padStart(places, "0");

export const getDateSequence = (id) => {
  const t = new Date();
  const year = t.getFullYear();
  const month = t.getMonth() + 1;
  const date = t.getDate();

  return `${year}${zeroPad(month, 2)}${date}_${id}`;
};
