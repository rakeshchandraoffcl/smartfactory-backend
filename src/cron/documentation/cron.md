# CRON Job in LSE

### For managing cron job in LSE, we are using a package called [cron](https://www.npmjs.com/package/cron)

- Currently we are using separate file for each cron job inside `src/cron`
- Each file inside `src/cron` should export a `cron.CronJob` object
- Every `cron.CronJob` object should be present inside the array in index.js ( `src/cron/index.js` )

## How to create an instance of `cron.CronJob`

- To create a cron object we need create an instance of `cron.CronJob`

```js
import cron from "cron";

const CronJob = cron.CronJob;

export const setDormantCron = new CronJob();
```

- Parameter passed to `CronJob` constructor will define functionalities of that cron job
- Parameters for `CronJob` are listed below:\
  1. `@param cronTime` - The time to fire off your job. This can be in the form of cron syntax or a JS `Date` object.\
  2. `@param onTick` - The function to fire at the specified time.
  3. `@param onComplete `- A function that will fire when the job is complete, when it is stopped.
  4. `@param startNow` - Specifies whether to start the job just before exiting the constructor. By default this is set to false. If left at default you will need to call `job.start()` in order to start the job (assuming `job` is the variable you set the cronjob to). This does not immediately fire your onTick function, it just gives you more control over the behavior of your jobs.
  5. `@param timeZone` - Specify the timezone for the execution. This will modify the actual time relative to your timezone. If the timezone is invalid, an error is thrown. Can be any string accepted by luxon's `DateTime.setZone()`
  6. For rest follow the documentation

## How to set cronTime

- We always needs to mention 6 fields while setting up cron time
  1. Seconds: 0-59
  2. Minutes: 0-59
  3. Hours: 0-23
  4. Day of Month: 1-31
  5. Months: 0-11 (Jan-Dec)
  6. Day of Week: 0-6 (Sun-Sat)
- Each field can be represent as follows:

  1. Asterisk. E.g. \*
  2. Ranges. E.g. 1-3,5
  3. Steps. E.g. \*/2

- `Examples:`

| Pattern              |                          Action                           |
| -------------------- | :-------------------------------------------------------: |
| \* \* \* \* \* \*    |                     Run every seconds                     |
| \*/10 \* \* \* \* \* |                    Run each 10 seconds                    |
| 00 00 08 \* \* \*    |                       Run at 08 AM                        |
| 00 00 19 \* \* \*    |                       Run at 007 PM                       |
| 00 05 00 \* 08 \*    |                    At 00:05 in August                     |
| 00 00 22 \* \* 1-5   | At 22:00 on every day-of-week from Monday through Friday. |

## `A complete example:`

```js
import cron from "cron";
import { setDormant } from "../utils/cron/index.js";

const CronJob = cron.CronJob;

export const setDormantCron = new CronJob(
  "00 00 08 * * * ",
  async () => {
    await setDormant();
  },
  null,
  false,
  "Asia/Seoul",
);
```

- To stop a cron job we can use `.stop()`

```js
import cron from "cron";
import { setDormant } from "../utils/cron/index.js";

const CronJob = cron.CronJob;

export const setDormantCron = new CronJob(
  "00 00 08 * * * ",
  async () => {
    await setDormant();
    this.stop();
  },
  () => {
    console.log("Runs after stop");
  },
  false,
  "Asia/Seoul",
);
```
