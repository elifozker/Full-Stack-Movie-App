import express from "express";
import{getAllWatchlists,getWatchlist,addToWatchlist} from "../controllers/watchlist.js";

const router=express.Router()

router.get("/watchlist/:movieID",getAllWatchlists);
router.get("/watchlist",getWatchlist) ////http://localhost:8800/api /watchlist ... app.use kısmında 8800/apiye ihtiyacım var.
router.post("/watchlist/add/:movieID",addToWatchlist)
//router.delete("/watchlist/remove/:movieID",removeFromWatchlist) 

export default router;