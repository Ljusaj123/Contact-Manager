import express from "express";

const router = express.Router();

router.route("/").get(getAllNumbers).post(createNumber);
router.route("/:id").delete(deleteNumber).patch(updateNumber).get(getNumber);

export default router;