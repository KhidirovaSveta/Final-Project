import express from "express";
import { createProduct, getSweeties, getSweetiesById } from "../controllers/sweeties.js";

const router = express.Router();

router.get("/", getSweeties);
router.get("/:id", getSweetiesById);
router.post("/", createProduct);

export default router;
