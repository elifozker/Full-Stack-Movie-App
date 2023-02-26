import {db} from "../connect.js"; 
export const getMovie = (req,res) =>{
    const q = `SELECT * from poster as p JOIN movies as m ON (m.movieid = p.movieid)`
    db.query(q,(err,data) =>{
        if(err){
            console.log(err);
            return res.json(err);
        }   
        return res.json(data);
    });

}