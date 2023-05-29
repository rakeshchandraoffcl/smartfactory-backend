import { StatusError, envs } from "../config/index.js";
import { passwordChanged } from "../utils/authentication/index.js";
import { userService } from "../services/index.js";

/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const validateRefreshToken = async (req, res, next) => {
  try {
    const token = req.token;
    if (!token) throw StatusError.forbidden("");

    const decodedData = userService.verifyToken(token, envs.jwt.refreshToken.secret);
    if (!decodedData || decodedData.id !== req.body.userId) throw StatusError.unauthorized("");

    const userDetails = await userService.getByUserId(decodedData.id);
    if (passwordChanged(decodedData.iat, userDetails.password_change_date))
      throw StatusError.sessionExpired("");

    if (!userDetails) throw StatusError.unauthorized("");

    req["userDetails"] = {
      id: userDetails.id,
      name: userDetails.name,
      email: userDetails.user_email,
    };
    next();
  } catch (error) {
    next(error);
  }
};
