export class StatusError extends Error {
  static badRequest(message, additinalData = null) {
    return new StatusError(400, message || "badRequest", additinalData);
  }
  static validationError({ source = "body", keys = [], message = "" } = {}) {
    return new StatusError(400, "badRequest", null, { source, keys, message });
  }
  static unauthorized(message) {
    return new StatusError(401, message || "unAuthorizedAccess");
  }
  static sessionExpired(message) {
    return new StatusError(401, message || "sessionExpired");
  }
  static forbidden(message) {
    return new StatusError(403, message || "forbidden");
  }
  static notFound(message) {
    return new StatusError(404, message || "notFound");
  }
  static serverError(message) {
    return new StatusError(500, message || "serverError");
  }
  static badGateway(message) {
    return new StatusError(502, message || "badGateWay");
  }
  statusCode;
  constructor(code, message, additinalData, validationError) {
    // console.log({ additinalData });
    super(message);
    this.statusCode = code;
    this.additinalData = additinalData;
    this.validationError = validationError;
  }
}
