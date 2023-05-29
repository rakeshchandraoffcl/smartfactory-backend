/**
 * @author Rakesh
 * @param {String} String to be hashed
 * @returns {String}
 */

export const passwordChanged = (jwtTime, passwordChangedAt) => {
  if (!passwordChangedAt) return false;
  const passwordChangedAtDateObj = new Date(passwordChangedAt);
  const passwordChangedNumeric = parseInt(passwordChangedAtDateObj.getTime() / 1000, 10);
  if (jwtTime < passwordChangedNumeric) {
    return true;
  } else {
    return false;
  }
};
