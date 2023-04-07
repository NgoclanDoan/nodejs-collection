const { UserFacingError } = require("./baseErrors");
const httpStatusCode = require("./httpStatusCodes");

class BadRequestError extends UserFacingError {
  constructor(message, options = {}) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    // You can attach relevant information to the error instance
    // (e.g.. the username)

    for (const [key, value] in Object.entries(options)) {
      this[key] = value;
    }

    Error.captureStackTrace(this);
  }

  get statusCode() {
    return httpStatusCode.BAD_REQUEST;
  }
}

class NotFoundError extends UserFacingError {
  constructor(message, options = {}) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    // You can attach relevant information to the error instance
    // (e.g.. the username)

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }

    Error.captureStackTrace(this);
  }
  get statusCode() {
    return httpStatusCode.NOT_FOUND;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError
}
