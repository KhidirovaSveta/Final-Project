import express from "express";
import { createResipes, deleteRecipesById, getRecipes, getRecipesById } from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipesById);
router.delete("/:id", deleteRecipesById);
router.post("/", createResipes);

export default router;
