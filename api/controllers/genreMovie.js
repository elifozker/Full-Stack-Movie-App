import {db} from "../connect.js"; 
export const getGenresMovies = (req,res) =>{
    const q = "SELECT * from genre join movieGenre on (genre.idgenre = movieGenre.genreid) join movies on (movies.movieid = movieGenre.movieid) join poster on (movies.movieid = poster.movieid)";
    db.query(q,(err,data) =>{
        if(err){
            console.log(err);
            return res.json(err);
        }
    
        return res.json(data);
    })

}