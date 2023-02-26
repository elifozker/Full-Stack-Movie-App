import express from "express";
import{getFavourites,addToFavourites,getAllWatchlists} from "../controllers/favourites.js";

const router=express.Router()
router.get("/favourites/:movieID",getAllWatchlists);
router.get("/favourites",getFavourites) ////http://localhost:8800/api /watchlist ... app.use kısmında 8800/apiye ihtiyacım var.
router.post("/favourites/add/:movieID",addToFavourites)

//router.delete("/favourites/remove/:movieID",removeFromFavourites) 

export default router;