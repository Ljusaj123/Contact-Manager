import express from "express";

const router = express.Router();

import {
  getAllNumbers,
  getNumber,
  createNumber,
  deleteNumber,
  updateNumber,
} from "../controllers/mobile_numbers.js";

router.route("/").get(getAllNumbers).post(createNumber);
router.route("/:id").delete(deleteNumber).patch(updateNumber).get(getNumber);

export default router;
