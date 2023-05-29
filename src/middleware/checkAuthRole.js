import { ROLES } from "../utils/constants.js";
import { StatusError } from "../config/index.js";
import { userService } from "../services/index.js";

/**
 * This function is used for validating role of a user
 *
 * @param {ROLES} role Role needs to validate
 * @return {EXPRESS REQUEST HANDLER}
 *
 */
export const checkAuthRole = (role) => async (req, res, next) => {
  try {
    // Check for valid role
    if (typeof role !== "string" || !Object.values(ROLES).includes(role)) {
      throw StatusError.unauthorized("");
    }
    const userRoles = await userService.getUserRoles(req["userDetails"].id);
    if (!userRoles.length) throw StatusError.unauthorized("");
    const isAdmin = userRoles.some((userRole) => userRole.role === role);
    if (!isAdmin) throw StatusError.unauthorized("");
    next();
  } catch (error) {
    next(error);
  }
};
