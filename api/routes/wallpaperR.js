import  express  from "express";
import { getWallpapers } from "../controllers/wallpaper.js";

const router = express.Router();

router.get("/",getWallpapers);

export default router;