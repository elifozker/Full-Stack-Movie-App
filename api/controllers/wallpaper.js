import {db} from "../connect.js"; 
export const getWallpapers = (req,res) =>{
    const q = `SELECT * from wallpapper as w JOIN movies as m ON (m.movieid = w.movieid)`
    db.query(q,(err,data) =>{
        if(err){
            console.log(err);
            return res.json(err);
        }   
        return res.json(data);
    });

}