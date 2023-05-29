import { userService } from "../services/index.js";
import { StatusError } from "../config/index.js";

/**
 * This function is used for validating Admin User
 * @param req
 * @param res
 * @param next
 */
export const authAdmin = async (req, res, next) => {
  try {
    const userRoles = await userService.getByUserId(req["userDetails"].id);
    if (!userRoles) throw StatusError.unauthorized("");

    const isAdmin = userRoles.user_type === "USER_TYPE_05" ? true : false;
    if (!isAdmin) throw StatusError.unauthorized("");

    next();
  } catch (error) {
    next(error);
  }
};
