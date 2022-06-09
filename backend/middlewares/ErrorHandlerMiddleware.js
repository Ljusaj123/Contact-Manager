import { StatusCodes } from "http-status-codes";

const ErroHandlerMiddleware = (error, req, res, next) => {
  let CustomError = {
    code: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong, try again",
  };

  if (err.name == "CastError") {
    CustomError.msg = `Provided id ${err.value._id} is not in correct form `;
    CustomError.statusCode = StatusCodes.NOT_FOUND;
  }
  if (err.name === "ValidationError") {
    CustomError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    CustomError.statusCode = StatusCodes.NOT_FOUND;
  }

  res.status(CustomError.statusCode).send({ msg: CustomError.message });
};

export default ErroHandlerMiddleware;
