import  express  from "express";
import { getMovie } from "../controllers/movie.js";

const router = express.Router();

router.get("/",getMovie);

export default router;