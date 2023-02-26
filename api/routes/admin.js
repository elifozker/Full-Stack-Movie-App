import express from "express";
import {admin,delUser,addGenre,addUser,getFavMovie,getlogs,getWatchMovie, delGenre } from "../controllers/admin.js"
const router=express.Router()

router.post("/admin",admin);
router.get("/admin",getlogs);
router.get("/admin/fav",getFavMovie);
router.get("/admin/watch",getWatchMovie);
router.post("/admin/delUser",delUser);
router.post("/admin/addGenre",addGenre );
router.post("/admin/addUser",addUser);
router.post("/admin/delGenre",delGenre );



export default router;