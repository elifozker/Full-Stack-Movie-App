import express from "express";
import {login,register,logout} from "../controllers/auth.js"

const router=express.Router()

router.post("/login",login) //http://localhost:8800/api/auth /login
router.post("/register",register)
router.post("/logout",logout)

export default router;