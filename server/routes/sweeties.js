import express from "express";

import { getSweeties, getSweetiesById } from "../controllers/sweeties.js";
// import {getSweetiesBySlug} from "../controllers/sweeties.js"
const router = express.Router();

router.get("/", getSweeties);
router.get("/:id", getSweetiesById);
// router.get("/:slug", getSweetiesBySlug);

export default router;
