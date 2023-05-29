import MySQLManager from "../../services/MySQLManager.js";
import { userService } from "../../services/index.js";

export const sendEmailLog = async (emailParams = {}) => {
  try {
    const {
      alarm_type,
      title,
      contents,
      alarm_from,
      alarm_to,
      receiver_id,
      created_by,
      /* create_date, */
      variables,
      file_name,
      file_path,
    } = emailParams;
    const alarmLog = {
      alarm_type: alarm_type,
      title: title,
      contents: contents,
      alarm_from: alarm_from,
      alarm_to: alarm_to,
      receiver_id: receiver_id,
      send_status: "N",
      created_by: created_by,
      /* create_date: create_date, */
      file_name: file_name ? file_name : null,
      file_path: file_path ? file_path : null,
    };
    await MySQLManager.getInstance().startTransaction();
    var alarmLogInsert = await userService.insertalarmLogData(alarmLog);
    if (alarmLogInsert > 0 && variables && variables.length > 0) {
      await Promise.all(
        variables.map(async (elements) => {
          const alarmVariable = {
            alarm_id: alarmLogInsert,
            variable_id: elements.variable_id,
            variable_ontents: elements.variable_ontents,
          };
          await userService.insertalarmVariableData(alarmVariable);
        }),
      );
      // for (const elements of variables) {
      //   const alarmVariable = {
      //     alarm_id: alarmLogInsert,
      //     variable_id: elements.variable_id,
      //     variable_ontents: elements.variable_ontents,
      //   };
      //   await userService.insertalarmVariableData(alarmVariable);
      // }
      // return;
    }
    return await MySQLManager.getInstance().commitTransaction();
  } catch (error) {
    return await MySQLManager.getInstance().rollbackTransaction();
  }
};

export const generateRandomString = () => {
  const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
  const randomArray = Array.from(
    { length: 10 },
    () => chars[Math.floor(Math.random() * chars.length)],
  );
  return randomArray.join("");
};
