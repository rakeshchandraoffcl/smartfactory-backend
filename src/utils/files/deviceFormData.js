import fs from "fs";

export const saveDeviceFormInfo = async (fileName, fileData) => {
  let obj = {
    fileName: "",
    fileOriginalName: "",
  };
  obj.fileName = fileData.fileName;
  obj.fileOriginalName = fileData.fileOriginalName;
  const json = JSON.stringify(obj);
  fs.writeFile(fileName, json, "utf8", function (err) {
    if (err) {
      console.log(err);
    }
  });
};
