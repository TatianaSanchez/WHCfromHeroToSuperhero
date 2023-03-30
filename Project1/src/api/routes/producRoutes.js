import productController from "../../controllers/productController";

const express = requiere("express");
const router = express.Router();

router
  .get("/")
  .get("/:productId")
  .post("/")
  .patch("/:productId")
  .delete("/:productId");

export default router;
