import  express  from "express";
import { getGenres } from "../controllers/genre.js";

const router = express.Router();

router.get("/",getGenres);

export default router;