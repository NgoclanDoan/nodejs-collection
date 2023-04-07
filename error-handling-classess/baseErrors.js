'use strict';

// Here is the base error classes to extend from

class ApplicationError extends Error {
  get name() {
    this.constructor.name;
  }
}

class DatabaseError extends ApplicationError {
  get name() {
    this.constructor.name;
  }
}

class UserFacingError extends ApplicationError {
  get name() {
    this.constructor.name;
  }
}

module.exports = {
  ApplicationError,
  DatabaseError,
  UserFacingError,
}
