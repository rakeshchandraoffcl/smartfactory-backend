import cron from "cron";
import { warnDormant } from "../utils/cron/index.js";

const CronJob = cron.CronJob;

export const warnDomrmantCron = new CronJob(
  // "*/10 * * * * * ",
  "00 00 08 * * * ",
  // "00 00 19 * * * ",
  async () => {
    console.log("This will run every day at 8 AM");
    await warnDormant();
  },
  null,
  false,
  "Asia/Seoul",
);
