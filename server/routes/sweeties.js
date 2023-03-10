import express from "express";
import { createCategory } from "../controllers/category.js";
import { createProduct, deleteProductById, getSweeties, getSweetiesById, updateProductEdit } from "../controllers/sweeties.js";

const router = express.Router();

router.get("/", getSweeties);
router.get("/:id", getSweetiesById);
router.delete("/:id", deleteProductById);
router.post("/", createProduct);
router.put("/:id", updateProductEdit);
router.post("/category", createCategory);

export default router;
