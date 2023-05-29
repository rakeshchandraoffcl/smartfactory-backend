import { StatusError } from "../config/index.js";
import { userService } from "../services/index.js";

/**
 * This function is used for validating role of a user
 *
 * @param {ROLES} role Role needs to validate
 * @return {EXPRESS REQUEST HANDLER}
 *
 */
export const checkAuthType =
  (...roles) =>
  async (req, res, next) => {
    try {
      const user = await userService.getByUserId(req["userDetails"].id);
      if (!user) throw StatusError.unauthorized("");
      if (!roles.includes(user.user_type)) throw StatusError.unauthorized("");
      next();
    } catch (error) {
      next(error);
    }
  };
