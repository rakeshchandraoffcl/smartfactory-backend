import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js";
import tz from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import "dayjs/locale/ko.js";
//dayjs.extend(localizedFormat);

export class CustomDate {
  constructor() {
    this.date = dayjs;
    this.date.extend(utc);
    this.date.extend(tz);
    this.date.extend(isSameOrAfter);
    this.date.tz.setDefault("Asia/Seoul");
  }

  getCurrentKoreanTime = (date = null) => {
    return date
      ? this.date(date).format("YYYY-MM-DD HH:mm:ss")
      : this.date().format("YYYY-MM-DD HH:mm:ss");
  };
  getCurrentDate = (date = null) => {
    return date ? this.date(date).format("YYYY-MM-DD") : this.date().format("YYYY-MM-DD");
  };
  getCurrentDateWithoutHypen = (date = null) => {
    return date ? this.date(date).format("YYYYMMDD") : this.date().format("YYYYMMDD");
  };
  getCurrentTime = (date = null) => {
    return date
      ? this.date(date).format("YYYY-MM-DD HH:mm:ss")
      : this.date().format("YYYY-MM-DD HH:mm:ss");
  };
  isoStringToMySQL = (date = new Date()) => {
    return date.toISOString().slice(0, 19).replace("T", " ");
  };
  isSameOrAfterToday = (date = null) => {
    if (!date) return false;
    return this.date().isSameOrAfter(date);
  };
  toKoreanLang = (date = null, { showTime = false } = {}) => {
    if (!date) return null;
    const localeFormat = showTime ? "LLL" : "LL";
    this.date.extend(localizedFormat);
    return date
      ? this.date(date).locale("ko").format(localeFormat)
      : this.date().locale("ko").format(localeFormat);
  };
  convertDateStringToDate = (
    dateString = null,
    stringFormat = "YYYY-MM-DD",
    toDateFormat = "YYYY-MM-DD",
  ) => {
    this.date.extend(customParseFormat);
    return dateString ? this.date(dateString, stringFormat).format(toDateFormat) : null;
  };
}
