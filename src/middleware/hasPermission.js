import { StatusError, envs } from "../config/index.js";
import { menuService, userService } from "../services/index.js";
import { USER_TYPE } from "../utils/constants.js";
import { passwordChanged } from "../utils/authentication/index.js";

/**
 * This function is used for validating whether user has access to a menu
 * @param req
 * @param res
 * @param next
 */

export const hasPermission = (menuName) => async (req, res, next) => {
  try {
    const token = req.token;
    let role = "";
    if (!token) {
      // For non logged in users
      role = USER_TYPE.non_member;
      const menuPermission = await menuService.getByMenuNameAndUserType(menuName, role);
      if (menuPermission.length === 0) {
        console.log("non-member-------no-permissions");
        throw StatusError.unauthorized("");
      }
      req["userDetails"] = {
        id: null,
        name: null,
        email: null,
      };
      next();
    } else {
      // For  logged in users
      const decodedData = userService.verifyToken(token, envs.jwt.accessToken.secret);
      if (!decodedData) {
        console.log("member-------no-decodedData");
        throw StatusError.unauthorized("");
      }

      const userDetails = await userService.getByEmail(decodedData.email);
      if (!userDetails) {
        console.log("member-------no-userDetails");
        throw StatusError.unauthorized("");
      }
      if (passwordChanged(decodedData.iat, userDetails.password_change_date)) {
        console.log("member-------passwordChanged");
        throw StatusError.sessionExpired("");
      }
      role = userDetails.user_type;
      const menuPermission = await menuService.getByMenuNameAndUserType(menuName, role);
      if (menuPermission.length === 0) {
        console.log("member-------no-permissions");
        throw StatusError.unauthorized("");
      }
      req["userDetails"] = {
        id: userDetails.id,
        name: userDetails.user_name,
        email: userDetails.user_email,
      };

      next();
    }
  } catch (error) {
    next(error);
  }
};
