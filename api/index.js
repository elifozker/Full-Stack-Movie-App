import Express from "express";
import authRoutes from "./routes/auth.js";

import watchlistRoutes from "./routes/watchlist.js";
import favouritesRoutes from "./routes/favourites.js";
import adminRoutes from "./routes/admin.js";
import cookieParser from "cookie-parser";
import moviesRoutes from "./routes/moviesR.js";
import genresRoutes from "./routes/genresR.js";
import genreMoviesRoutes from "./routes/genreMoviesR.js";
import wallpaperRoutes from "./routes/wallpaperR.js";
import details from "./routes/details.js"
import users from "./routes/users.js"
import cors from "cors";


const app=Express();

//middlewares

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)// böylelikle frontende cookilerimizi gönderebilicez.
    next()
})

app.use(Express.json())//backend kısmına json objesi gönderilebilsin diye yapılıyor

app.use(cors({
    origin:"http://localhost:3000"
}));//localhost8880 hariç sitemize erişim olmasın diye kullanılıyor

app.use(cookieParser())

app.use("/server/detail", details)
app.use("/server",users)
app.use("/api/auth",authRoutes);
app.use("/api",watchlistRoutes);
app.use("/api",favouritesRoutes);
app.use("/movies",moviesRoutes);
app.use("/genres",genresRoutes);
app.use("/genreMovies",genreMoviesRoutes);
app.use("/wallpapers",wallpaperRoutes);
app.use("/server",adminRoutes);

app.listen(8800,()=>{
    console.log("API working!")
})