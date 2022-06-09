import express from "express";

const router = express.Router();

import {
  getAllContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
} from "../controllers/contacts.js";

router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").delete(deleteContact).patch(updateContact).get(getContact);

export default router;
