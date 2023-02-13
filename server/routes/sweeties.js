import express from "express";

import { getSweeties } from "../controllers/sweeties.js";

const router = express.Router();

router.get("/", getSweeties);

export default router;
