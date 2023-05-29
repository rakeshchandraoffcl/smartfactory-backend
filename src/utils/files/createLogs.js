import fs from "fs";

export const createLogFile = async (fileName, fileData) => {
  let obj = {
    logs: [],
  };
  fs.readFile(fileName, "utf8", function readFileCallback(err, data) {
    if (err) {
      obj.logs.push(fileData);
      const json = JSON.stringify(obj);
      fs.writeFile(fileName, json, "utf8", function (err) {
        if (err) {
          console.log(err);
        }
      });
    } else {
      obj = JSON.parse(data); //now it an object
      obj.logs.push(fileData); //add some data
      const json = JSON.stringify(obj); //convert it back to json
      fs.writeFile(fileName, json, "utf8", function (err) {
        if (err) {
          console.log(err);
        }
      }); // write it back
    }
  });
};
