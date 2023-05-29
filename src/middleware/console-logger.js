import { envs } from "../config/index.js";
import { CustomDate } from "./../utils/date/customDate.js";
import { userService } from "../services/index.js";
/**
 * This function is used to display logs on every request
 * @param req
 * @param res
 * @param next
 */
export const consoleLogger = (req, res, next) => {
  try {
    const {
      method,
      url,
      _remoteAddress,
      headers: { ["user-agent"]: userAgent },
      token,
    } = req;
    if (String(url).startsWith("/uploads")) return next();
    const { id: userId, email: userEmail } = getUserInfo(token);
    const { statusCode } = res;
    const serverLogFormat = `[INFO] [${method}/${statusCode}] ${url} [timestamp] ${new CustomDate().getCurrentTime()}`;
    const clientLogFormat = `[INFO] [REMOTE IP: ${_remoteAddress}] [USER-AGENT] ${userAgent} [timestamp] ${new CustomDate().getCurrentTime()}`;
    console.log(serverLogFormat);
    console.log(clientLogFormat);
    console.log(userId, userEmail);
    next();
  } catch (error) {
    next(error);
  }
};

const getUserInfo = (token) => {
  return token
    ? userService.verifyToken(token, envs.jwt.accessToken.secret)
    : { id: null, email: null };
};
