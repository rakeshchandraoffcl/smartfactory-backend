/* eslint-disable no-unused-vars */
export const handleError = (err, req, res, next) => {
  console.log(err);
  // Handel multer error
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({ error: res.__("fileSizeNotMatch") });
  } else if (err.code === "LIMIT_FILE_SIZE_30") {
    res.status(400).send({ error: res.__("fileSizeNotMatchLg") });
  } else if (err.code === "LIMIT_FILE_TYPE") {
    res.status(400).send({ error: res.__("invalidFile") });
  } else if (err.code === "LIMIT_UNEXPECTED_FILE") {
    res.status(400).send({ error: res.__("maximumFileLimit") });
  } else if (err.validationError) {
    const { source, keys, message } = err.validationError;
    res.locals.error = res.__(message);
    const errorObject = {
      statusCode: 400,
      error: "Bad Request",
      message: "Validation failed",
      validation: {
        [source]: {
          source,
          keys,
          message: res.__(message),
        },
      },
    };
    res.status(400).send(errorObject);
  } else {
    let message;
    let status;

    if (err.statusCode) {
      message = err.message || "serverError";
      status = err.statusCode;
    } else {
      message = "serverError";
      status = 500;
    }

    res.locals.error = res.__(message);
    const dataTosend = {
      error: res.__(message),
    };

    /**
     * Translate text based on language set on header
     * It will not translate data which starts with the key name "type"
     * @author Rakesh
     * @param res
     * @param data
     * @return any
     *
     */
    const translateData = (meth, data) => {
      if (!data) {
        return data;
      }
      if (typeof data === "number" || typeof data === "string") {
        res.locals.error = meth(data.toString());
        return meth(data.toString());
      } else if (data.constructor.name === "Object") {
        const respObj = {};
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            if (key.startsWith("type") || !data[key]) {
              respObj[key] = data[key];
            } else if (typeof data[key] === "number" || typeof data[key] === "string") {
              res.locals.error = meth(data[key].toString());
              respObj[key] = meth(data[key].toString());
            } else if (
              data[key].constructor.name == "Object" ||
              data[key].constructor.name == "Array"
            ) {
              respObj[key] = translateData(meth, data[key]);
            }
          }
        }
        return respObj;
      } else if (data.constructor.name === "Array") {
        return data.map((item) => translateData(meth, item));
      }
    };
    if (err.additinalData) {
      // console.log(err.additinalData);
      // console.log(translateData(err.additinalData));
      dataTosend.additinalData = translateData(res.__, err.additinalData);
    }

    res.status(status).send(dataTosend);
  }
};
