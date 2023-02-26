import {db} from "../connect.js"; 
export const getGenres = (req,res) =>{
    const q = "SELECT * from genre";
    db.query(q,(err,data) =>{
        if(err){
            console.log(err);
            return res.json(err);
        }
    
        return res.json(data);
    })

}