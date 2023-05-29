import { FILE_TYPES, UPLOAD_DIRECTORIES } from "../utils/constants.js";

import multer from "multer";
import path from "path";
import { v4 } from "uuid";
import { CustomDate } from "../utils/date/customDate.js";
import { getFileSizeByMb } from "../utils/files/index.js";
import fs from "fs";
import { envs } from "./../config/envs.js";

/**
 * Function that that generate multer storage
 * @param    {String} dirName    Name of the directory
 */

const generateStorage = (dirName, storageType = "diskStorage") => {
  return multer[storageType]({
    destination: function (req, file, cb) {
      cb(null, `./uploads/${dirName}`);
    },
    filename: async function (req, file, cb) {
      const today = new CustomDate();
      const yyyy = today.date().year();
      let mm = today.date().month() + 1; // Months start at 0!
      let dd = today.date().date();
      const pathToCheck =
        dirName + "-" + dd + "-" + mm + "-" + yyyy + "-" + v4() + path.extname(file.originalname);
      cb(null, pathToCheck);
    },
  });
};

const createStorage = (moduleName = null, storageType = "diskStorage") => {
  return multer[storageType]({
    destination: function (req, file, cb) {
      let directory;
      if (moduleName)
        directory = `${
          envs.uploadPath
        }/${moduleName}/${new CustomDate().getCurrentDateWithoutHypen()}`;
      else directory = `${envs.uploadPath}/${new CustomDate().getCurrentDateWithoutHypen()}`;
      if (!fs.existsSync(directory)) {
        //fs.mkdirSync(directory, { recursive: true });
        fs.mkdirSync(directory, { recursive: true, mode: "0775" });
      }
      cb(null, directory);
    },
    filename: async function (req, file, cb) {
      const pathToCheck = `${Date.now()}-${file.originalname}`;
      cb(null, pathToCheck);
    },
  });
};

const generateFilter = (allowedFileSize, allowedFileTypes) => (req, file, callback) => {
  const acceptableExtensions = allowedFileTypes;
  const mime = file.mimetype;
  if (!acceptableExtensions.includes(mime)) {
    return callback({ code: "LIMIT_FILE_TYPE" });
  }

  const fileSize = parseInt(req.headers["content-length"]);
  if (fileSize > allowedFileSize) {
    return callback({ code: "LIMIT_FILE_SIZE_50" });
  }

  callback(null, true);
};

export const uploadAttachment = multer({
  storage: createStorage(UPLOAD_DIRECTORIES.EDITOR),
  // fileFilter,
});

export const supplieruploadAttachment = multer({
  storage: createStorage(),
  // fileFilter,
});

export const quoteuploadAttachment = multer({
  storage: generateStorage(UPLOAD_DIRECTORIES.QUOTE_MANAGEMENT),
  // fileFilter,
});

export const demanerUploadAttachment = multer({
  storage: createStorage(),
});

export const bestpracticeuploadAttachment = multer({
  storage: createStorage(),
  // fileFilter,
  /* limits: {
    fileSize: 1024 * 1024 * 50,
  }, */
});

export const simpleveldiagnosisImgFile = multer({
  storage: createStorage(),
  // fileFilter,
});

export const supplyCompanyImgFile = multer({
  storage: createStorage(),
  // fileFilter,
  // limits: {
  //   fileSize: 1024 * 1024 * 10,
  // },
});
export const businessProgressAttactment = multer({
  storage: createStorage(),
  // fileFilter,
  // limits: {
  //   fileSize: 1024 * 1024 * 10,
  // },
});
export const smartDeviceQuoteAttactment = multer({
  storage: createStorage(),
  // fileFilter,
  // limits: {
  //   fileSize: 1024 * 1024 * 10,
  // },
});

export const demandCompanyImgFile = multer({
  storage: createStorage(),
});

export const supplierCertifiedAttachment = multer({
  storage: createStorage(),
  // fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export const smartFactoryImgFile = multer({
  storage: createStorage(),
  // fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
export const quoteDeliveryFile = multer({
  storage: createStorage(),
  // fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export const smartDeviceImgFile = multer({
  storage: createStorage(),
  // fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export const noticeFile = multer({
  storage: createStorage(),
  // fileFilter,
  // limits: {
  //   fileSize: 1024 * 1024 * 10,
  // },
});

export const uploadDiagnosis = multer({
  storage: createStorage(),
  fileFilter: generateFilter(getFileSizeByMb(50), [
    FILE_TYPES.jpeg,
    FILE_TYPES.jpg,
    FILE_TYPES.png,
  ]),
});

export const notificationExcel = multer({
  storage: createStorage(null, "memoryStorage"),
  fileFilter: generateFilter(getFileSizeByMb(50), [FILE_TYPES.xls, FILE_TYPES.xlsx]),
});

export const adminUpdateMentoringDetailsFileHandler = multer({
  storage: createStorage(),
});
export const userUpdateMentoringDetailsFileHandler = multer({
  storage: createStorage(),
});
export const manageMentoringHistoryFileHandler = multer({
  storage: createStorage(),
});

// export const mentoringprogressAttachmenFile = multer({
//   storage: generateStorage(UPLOAD_DIRECTORIES.MENTORING),
// });
export const uploadQuotation = multer({
  storage: generateStorage(UPLOAD_DIRECTORIES.REQUEST_QUOTITION),
});
export const manageDeviceFileUploadHandler = multer({
  storage: createStorage(),
});
export const manageDeviceFormFileUploadHandler = multer({
  storage: createStorage(),
});
export const mentoringApplicationFileUploadHandler = multer({
  storage: createStorage(),
});
export const mentoringuploadAttachmenFile = multer({
  //storage: generateStorage(UPLOAD_DIRECTORIES.MENTORING_PROGRESS),
  storage: createStorage(),
});
export const mentoringprogressAttachmenFile = multer({
  storage: createStorage(),
});

export const improvementTaskFile = multer({
  storage: createStorage(),
  //fileFilter: generateFilter(getFileSizeByMb(3), [FILE_TYPES.jpg, FILE_TYPES.png]),
});

export const mentoringResultFileUploadHandler = multer({
  storage: createStorage(),
  fileFilter: generateFilter(getFileSizeByMb(3), [FILE_TYPES.jpeg, FILE_TYPES.jpg, FILE_TYPES.png]),
});
