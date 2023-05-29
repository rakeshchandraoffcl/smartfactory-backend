import { UPLOAD_DIRECTORIES } from "../constants.js";
import { envs } from "./../../config/envs.js";

const getPath = (req, file, dir) => {
  if (!file) {
    return null;
  }
  file = file.replaceAll("\\", "/");
  const protocol = String(req.headers.host).includes("localhost") ? "http" : "https";
  if (file.startsWith(`${envs.uploadPath}`)) return `${protocol}://${req.headers.host}/${file}`;
  return `${protocol}://${req.headers.host}/uploads/${dir}/${file}`;
};

export const GET_FILE_URL = {
  diagnosis: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.DIAGNOSIS);
  },

  smartFactory: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.SMART_FACTORY);
  },
  smartDevice: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.SMART_DEVICE);
  },
  deviceQuote: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.DEVICE_QUOTE);
  },
  supplierIntroduction: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.SUPPLIER_INTRODUCTION);
  },
  supplycompanyImage: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.COMPANY);
  },
  demandCompanyImage: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.COMPANY);
  },
  bestcompanyImage: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.BEST_PRACTICE);
  },
  notice: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.NOTICE);
  },
  mentoring: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.MENTORING);
  },
  mentoringProgress: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.MENTORING_PROGRESS);
  },
  businessProgress: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.BUSINESS_PROGRESS);
  },
  device: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.DEVICES);
  },
  request_quote: (req, file) => {
    return getPath(req, file, UPLOAD_DIRECTORIES.REQUEST_QUOTITION);
  },
  bestPractice: (req, file) => {
    if (!file) {
      return null;
    }
    return `${req.protocol}/${req.headers.host}/uploads/${UPLOAD_DIRECTORIES.BEST_PRACTICE}/${file}`;
  },
};

// Download attachment file
const getFilePath = (req, fileName, originalFileName, dir) => {
  if (!fileName) {
    return null;
  }

  return `${req.protocol}://${req.headers.host}/api/v1/user/downloadattachment/${dir}/${fileName}/${originalFileName}`;
};

export const GET_FILE_PATH = {
  smartFactory: (req, fileName, originalFileName) => {
    return getFilePath(req, fileName, originalFileName, UPLOAD_DIRECTORIES.SMART_FACTORY);
  },
};
