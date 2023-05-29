import { decryptData } from "./encryptAndDecrypt/EncryptAndDecrypt.js";

export const replaceContent = (searchArray, content) => {
  let output = content;

  searchArray.forEach((item) => {
    let value = item.value;
    const decryptValue = decryptData(item.value);
    if (decryptValue) {
      value = decryptValue;
    }
    const reg = new RegExp(`${item.startSeparator}${item.name}${item.endSeparator}`, "g");
    output = output.replace(reg, value);
  });
  return output;
};
