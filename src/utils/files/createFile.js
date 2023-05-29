import fs from "fs";

export const createJSONFile = async (fileName, fileData) => {
  fs.writeFile(fileName, JSON.stringify(fileData, null, 4), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + fileName);
    }
  });
};
