import {db} from "../connect.js";
import jwt from "jsonwebtoken";


export const getAllWatchlists=(req,res)=>{
    const q="SELECT userid FROM favouriteslist WHERE movieid = ? ";

    const movieID=req.params.movieID;

    db.query(q,[movieID],(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data.map(watchlist=>watchlist.userid));
    });
};


export const getFavourites=(req,res)=>{

    const token=req.cookies.accessToken;
    //console.log(token)//doğru geliyo tokenı
    
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
         if (err) 
             return res.status(403).json("Token is not valid")

             const q=`SELECT f.idfavouritesList ,u.idusers,m.movieid,m.movieTitle,p.posterLink FROM favouriteslist AS f JOIN users AS u ON(u.idusers= ? AND u.idusers=f.userid) 
             JOIN movies AS m ON(m.movieid=f.movieid)
             JOIN poster AS p ON(m.movieid=p.movieid)`;
         
             db.query(q,[userInfo.id],(err,data)=>{
                 if (err) return res.status(500).json(err);
                 console.log(data);
                 return res.status(200).json(data);
                 
         });

     })
};

export const addToFavourites=(req,res)=>{

    const{userid}=req.body;


            const movieID=req.params.movieID;
            
            const foundQuery="SELECT * FROM favouriteslist WHERE userid=? AND movieid=?";
            db.query(foundQuery,[userid,movieID],(err,data)=>{
                if (err) return res.status(500).json(err);
                if(data.length==0){
                    const q="INSERT INTO favouriteslist (`userid`,`movieid`) VALUE (?)";
                    const values=[userid,movieID];

                        db.query(q,[values],(err,data)=>{
                            if (err) return res.status(500).json(err);
                            return res.status(200).json("Movie has been added to favouriteslist");
                        });
                        const logquery="INSERT INTO logs (`userid`,`login`,`register`,`addtowatchlist`,`addtofavourites`,`movieid`) VALUE (?)";
                        const logvalues=[userid,"no","no","no","add",movieID];
                        db.query(logquery,[logvalues],(err,data)=>{
                            if (err) return res.status(500).json(err);
                            //return res.status(200).json("log added into logs");
                         });
                }
                else{
                    const q="DELETE FROM favouriteslist WHERE  movieid=? AND userid=?";
        
                    db.query(q,[movieID,userid],(err,data)=>{
                        if (err) return res.json(err);
                        return res.json("Movie has been deleted from favouriteslist succesfully!")
                    })
                    const logquery="INSERT INTO logs (`userid`,`login`,`register`,`addtowatchlist`,`addtofavourites`,`movieid`) VALUE (?)";
                        const logvalues=[userid,"no","no","no","remove",movieID];
                        db.query(logquery,[logvalues],(err,data)=>{
                            if (err) return res.status(500).json(err);
                            //return res.status(200).json("log added into logs");
                         });
                }
            })
};

// export const removeFromFavourites=(req,res)=>{

//     const token=req.cookies.accessToken;
//     if(!token) return res.status(401).json("Not logged in!")
//     jwt.verify(token,"secretkey",(err,userInfo)=>{
//         if (err) 
//             return res.status(403).json("Token is not valid")

//             const movieID=req.params.movieID;

//             const q="DELETE FROM favouriteslist WHERE  movieid=? AND userid=?";
        
//             db.query(q,[movieID,userInfo.id],(err,data)=>{
//                 if (err) return res.json(err);
//                 return res.json("Movie has been deleted succesfully!")
//             })
//     })

// }