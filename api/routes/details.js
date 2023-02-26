import express from "express";
import { description } from "../controllers/detail.js";
const router = express.Router()

router.get("/:movieid", description)
export default router;