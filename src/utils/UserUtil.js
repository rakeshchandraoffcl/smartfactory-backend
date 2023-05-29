import { TABLES } from "./constants.js";
import { decryptData } from "../utils/encryptAndDecrypt/EncryptAndDecrypt.js";
import MySQLManager from "./../services/MySQLManager.js";

/**
 * @Author jhkim
 * @param {[]} array of objects
 * @returns {[]} array of changed objects with username
 */
const replaceWithUsernameById = async (arrayOfEntities) => {
  const resultArray = [];
  for (let entity of arrayOfEntities) {
    const created_by = await getUsernameById(entity["created_by"]);
    const updated_by = await getUsernameById(entity["updated_by"] || entity["created_by"]);
    entity = {
      ...entity,
      created_by,
      updated_by,
    };
    resultArray.push(entity);
  }
  return resultArray;
};

const getUsernameById = async (id) => {
  const query = `SELECT user_name FROM ${TABLES.USER_TABLE} WHERE id = ${id}`;
  const [{ user_name: username }] = await MySQLManager.getInstance().execute(query);
  return decryptData(username);
};

export default {
  replaceWithUsernameById,
};
