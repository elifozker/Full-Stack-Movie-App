import  express  from "express";
import { getGenresMovies } from "../controllers/genreMovie.js";

const router = express.Router();

router.get("/",getGenresMovies);

export default router;