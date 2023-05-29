import { SET_DORMANT_DURATION, WARN_DORMANT_DURATION } from "../constants.js";
import {
  codeSpecificationService,
  emailTemplateService,
  userService,
} from "../../services/index.js";

import { CustomDate } from "../date/customDate.js";
import { createLogFile } from "../files/index.js";
import { envs } from "../../config/index.js";

export const warnDormant = async () => {
  try {
    const dormantDetails = await codeSpecificationService.getByCodeNo(SET_DORMANT_DURATION);
    if (!dormantDetails || !Number(dormantDetails.code_name)) {
      return;
    }
    const days = Number(dormantDetails.code_name) - WARN_DORMANT_DURATION;
    // const randomString = generateRandomString();
    // console.log({ days });
    const dormantWarnUsers = await userService.getUsersByLastLoggedDate(days);
    const createDate = new CustomDate().getCurrentTime();
    for (const element of dormantWarnUsers) {
      const emailParams = {
        alarm_from: String(envs.smtp.fromEmail),
        alarm_to: element.user_email,
        receiver_id: element.id,
        created_by: element.id,
        create_date: createDate,
        variables: [
          {
            variable_id: "variable_id_01",
            variable_ontents: `${WARN_DORMANT_DURATION}`,
          },
        ],
      };
      await emailTemplateService.dormantaccounttransfersoonData(emailParams);
    }

    const fileName = "uploads/cron/warn-dormant.json";
    const fileData = {
      users: dormantWarnUsers.map((item) => item.user_email),
      indianTime: createDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      koreanTime: createDate.toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
    };
    createLogFile(fileName, fileData);
  } catch (error) {
    console.log(error);
  }
};
