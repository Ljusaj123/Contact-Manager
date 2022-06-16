import axios from "axios";

const DeleteContact = async (url) => {
  const result = await axios.delete(url);
  const message = await result.data;
  return message;
};

export default DeleteContact;
