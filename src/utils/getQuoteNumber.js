import { addLeadingZeros } from "./addLeadingZero.js";
import { CustomDate } from "./date/customDate.js";

export const getQuoteNumber = (id) => {
  if (!id) return null;
  const d = new CustomDate().date();
  const year = d.year();
  const month = d.month() + 1;
  const date = d.date();
  const idWithZero = addLeadingZeros(id);

  return `REQ_${year}${month}${date}_${idWithZero}`;
};
