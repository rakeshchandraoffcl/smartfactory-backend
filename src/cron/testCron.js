import cron from "cron";

const CronJob = cron.CronJob;

export const testJob = new CronJob(
  "*/10 * * * * *",
  function () {
    console.log("You will see this message every second");
    this.stop();
  },
  () => {
    console.log("Runs ar the end");
  },
  true,
  "Asia/Kolkata",
);
