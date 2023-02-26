import {db} from "../connect.js"


export const description = (req,res)  =>{
    const movieid = req.params.movieid;
    const movies = 'SELECT m.*,p.posterLink,pr.personName FROM movies AS m JOIN poster AS p ON (m.movieid =p.movieid AND m.movieid=?) JOIN person AS pr ON (pr.movieid = m.movieid)';
    
    //const moviePoster = "SELECT poster.posterLink FROM poster JOIN movies ON movies.movieid = poster.movieid AND movieid = ?"

    db.query(movies,[movieid], (err,data)=>{
    if(err) return res.status(500).json(err);
return res.status(200).json({"movies":data});
   });
}