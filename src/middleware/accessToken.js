import { StatusError, envs } from "../config/index.js";

import { decryptData } from "../utils/encryptAndDecrypt/Index.js";
import { passwordChanged } from "../utils/authentication/index.js";
import { userService } from "../services/index.js";

/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const validateAccessToken = async (req, res, next) => {
  try {
    const token = req.token;
    if (!token) throw StatusError.forbidden("");

    const decodedData = userService.verifyToken(token, envs.jwt.accessToken.secret);
    if (!decodedData) throw StatusError.unauthorized("");

    const userDetails = await userService.getByEmail(decodedData.email);
    if (!userDetails) throw StatusError.unauthorized("");
    if (passwordChanged(decodedData.iat, userDetails.password_change_date))
      throw StatusError.sessionExpired("");

    req["userDetails"] = {
      id: userDetails.id,
      name: decryptData(userDetails.user_name),
      email: userDetails.user_email,
      userType: userDetails.user_type,
    };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const validateAccessTokenForLoggedAndNotLogged = async (req, res, next) => {
  try {
    const token = req.token ? req.token : null;

    const decodedData = token ? userService.verifyToken(token, envs.jwt.accessToken.secret) : null;

    const userDetails = decodedData ? await userService.getByEmail(decodedData.email) : null;

    req["userDetails"] = !userDetails
      ? { id: null }
      : {
          id: userDetails.id,
          name: decryptData(userDetails.user_name),
          email: userDetails.user_email,
        };

    next();
  } catch (error) {
    next(error);
  }
};
