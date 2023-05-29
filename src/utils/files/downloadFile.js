import stream from "stream";
import { UPLOAD_DIRECTORIES } from "../constants.js";

export const STATIC_PATH = {
  NOTICE(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.NOTICE}/${path}`;
  },
  BUSINESS_PROGRESS(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.BUSINESS_PROGRESS}/${path}`;
  },
  QUOTE_DELIVERY(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.QUOTE_DELIVERY}/${path}`;
  },
  DIAGNOSIS(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.DIAGNOSIS}/${path}`;
  },
  SUPPLIER_INTRODUCTION(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.SUPPLIER_INTRODUCTION}/${path}`;
  },
  DEMANDER_INTRODUCTION(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.DEMANDER_INTRODUCTION}/${path}`;
  },
  BEST_PRACTICE(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.BEST_PRACTICE}/${path}`;
  },
  COMPANY(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.COMPANY}/${path}`;
  },
  SMART_DEVICE(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.SMART_DEVICE}/${path}`;
  },
  SMART_FACTORY(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.SMART_FACTORY}/${path}`;
  },
  NOTIFICATION(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.NOTIFICATION}/${path}`;
  },
  MENTORING(path) {
    // return `./uploads/${UPLOAD_DIRECTORIES.MENTORING}/${path}`;
    return `${path}`;
  },
  MENTORING_PROGRESS(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.MENTORING_PROGRESS}/${path}`;
  },
  QUOTE_REQUEST(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.QUOTE_REQUEST}/${path}`;
  },
  FORM(path) {
    return `./uploads/${UPLOAD_DIRECTORIES.FORM}/${path}`;
  },
};

export const downloadFile = (res, { path, name } = {}) =>
  new Promise((resolve, reject) => {
    if (!path) return reject("Please provide path");
    let downloadName = "";
    if (name) {
      downloadName = name;
    } else {
      const pathArray = path.split("/");
      downloadName = pathArray[pathArray.length - 1];
    }

    res.download(path, downloadName, (err) => {
      if (err) {
        return reject(err);
        // Handle error, but keep in mind the response may be partially-sent
        // so check res.headersSent
      } else {
        return resolve(downloadName);
        // decrement a download credit, etc.
      }
    });
  });

export const downloadFileBuffer = (res, { buffer, name }) => {
  const readStream = new stream.PassThrough();
  readStream.end(buffer);

  res.set("Content-disposition", "attachment; filename=" + name);
  res.set("Content-Type", "text/plain");

  readStream.pipe(res);
};
