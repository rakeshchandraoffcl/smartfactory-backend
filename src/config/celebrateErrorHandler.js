import { isCelebrateError } from "celebrate";

export const handleCelebrateError = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    const respObject = {
      statusCode: 400,
      error: "Bad Request",
      message: "Validation failed",
      validation: {},
    };
    err.details.forEach((value, item) => {
      respObject["validation"][item] = {
        source: `${item}`,
        keys: value?.details?.[0]?.["path"],
        message: value?.details?.[0]?.["message"],
      };
      if (value?.details?.[0]?.["message"]) {
        const message = value?.details?.[0]?.["message"];
        res.locals.error = res.__(message);
        respObject["validation"][item]["message"] = res.__(message);
      }
    });
    res.status(400).json(respObject);
  } else {
    next(err);
  }
};
