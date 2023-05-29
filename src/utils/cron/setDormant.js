import {
  codeSpecificationService,
  emailTemplateService,
  userService,
} from "../../services/index.js";

import { CustomDate } from "../date/customDate.js";
import { SET_DORMANT_DURATION } from "../constants.js";
import { createLogFile } from "../files/index.js";
import { envs } from "../../config/index.js";
import MySQLManager from "../../services/MySQLManager.js";

export const setDormant = async () => {
  try {
    const dormantDetails = await codeSpecificationService.getByCodeNo(SET_DORMANT_DURATION);
    if (!dormantDetails || !Number(dormantDetails.code_name)) {
      return;
    }
    const dormantSetUsers = await userService.getUsersByLastLoggedDate(
      Number(dormantDetails.code_name),
    );
    const createDate = new CustomDate().getCurrentTime();

    for (const element of dormantSetUsers) {
      const emailParams = {
        alarm_from: String(envs.smtp.fromEmail),
        alarm_to: element.user_email,
        receiver_id: element.id,
        created_by: element.id,
        create_date: createDate,
      };
      const data = {
        user_status: "MMBRS_STTS_03",
        resting_date: createDate,
      };
      await emailTemplateService.dormantaccounttransferdoneData(emailParams);
      await MySQLManager.getInstance().startTransaction();
      await userService.updateUserpassworddormant(data, element.id);
      await MySQLManager.getInstance().commitTransaction();
    }

    const fileName = "uploads/cron/dormant-users.json";
    const fileData = {
      users: dormantSetUsers.map((item) => item.user_email),
      indianTime: createDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      koreanTime: createDate.toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
    };
    createLogFile(fileName, fileData);
  } catch (error) {
    console.log(error);
  }
};
