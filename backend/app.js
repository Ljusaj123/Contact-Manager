import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import connectDB from "./database/connect.js";
import numberRoute from "./routes/mobile_numbers.js";

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1", numberRoute);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
