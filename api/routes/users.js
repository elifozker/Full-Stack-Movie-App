import express from "express";
import { getUser, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/profile", getUser)
router.post("/profile", updateUser);



export default router