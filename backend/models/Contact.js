import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  surname: {
    type: String,
    required: [true, "Please provide surname"],
  },
  number: {
    type: [Number],
    required: [true, "Please provide number"],
  },
  email: {
    type: [String],
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please provide address"],
  },
  tag: {
    type: String,
  },
});

export default mongoose.model("Contact", contactSchema);
