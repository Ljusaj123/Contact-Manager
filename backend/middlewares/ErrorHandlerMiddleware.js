import { StatusCodes } from "http-status-codes";

const ErroHandlerMiddleware = (error, req, res, next) => {
  let CustomError = {
    code: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong, try again",
  };

  if (error.code && error.code === 11000) {
    CustomError.message = `Duplicate value entered for ${Object.keys(
      error.keyValue
    )} field, please choose another value`;
    CustomError.code = StatusCodes.BAD_REQUEST;
  }

  if (error.name == "CastError") {
    CustomError.message = `Provided id ${error.value._id} is not in correct form `;
    CustomError.code = StatusCodes.NOT_FOUND;
  }
  if (error.name === "ValidationError") {
    CustomError.message = Object.values(error.errors)
      .map((item) => item.message)
      .join(",");
    CustomError.code = StatusCodes.NOT_FOUND;
  }

  res.status(CustomError.code).send({ msg: CustomError.message });
};

export default ErroHandlerMiddleware;
