import express from "express";

import { getSweeties } from "../controllers/sweeties.js";
import {getSweetiesById} from "../controllers/sweeties.js"
const router = express.Router();

router.get("/", getSweeties);
router.get("/:id", getSweetiesById);

export default router;
