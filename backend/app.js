import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import connectDB from "./database/connect.js";
import contactRoute from "./routes/contacts.js";
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware.js";
import NotFoundMiddleware from "./middlewares/NotFoundMiddleware.js";

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(express.json());
app.use("/api/v1/contacts", contactRoute);
app.use(ErrorHandlerMiddleware);
app.use(NotFoundMiddleware);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
