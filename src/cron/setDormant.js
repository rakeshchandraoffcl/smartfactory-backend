import cron from "cron";
import { setDormant } from "../utils/cron/index.js";

const CronJob = cron.CronJob;

export const setDormantCron = new CronJob(
  // "*/10 * * * * * ",
  "00 00 08 * * * ",
  // "00 00 19 * * * ",
  async () => {
    console.log("This will run every day at 8 AM");
    await setDormant();
  },
  null,
  false,
  "Asia/Seoul",
);
