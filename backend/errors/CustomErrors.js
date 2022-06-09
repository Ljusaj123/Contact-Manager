import { StatusCodes } from "http-status-codes";
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}

export class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
