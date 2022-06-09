import mongoose from "mongoose";

const connectDB = async (url) => {
  return mongoose.connect(url);
};

mongoose.connection.on("connected", () => {
  console.log("Database connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected");
});

export default connectDB;
