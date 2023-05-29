/**
 * This function is a middleware that handles form-data with STRINGIFIED JSON data for transformation to data PARSED INTO JSON to body of request.
 * @param {request, response, next} request from client response from server next function
 * @return to next
 * @author jhkim
 */
export const formDataToBodyHandler = (req, res, next) => {
  if (!req.body) next();
  for (const [key, value] of Object.entries(req.body)) {
    if (typeof value === typeof String()) {
      try {
        const payload = JSON.parse(value);
        req.body[key] = payload;
      } catch (error) {
        continue;
      }
    } else {
      if (typeof value === typeof Object() && !Object.keys(value).length) delete req.body[key];
    }
  }
  next();
};
