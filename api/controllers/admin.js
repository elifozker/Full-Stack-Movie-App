import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const admin = (req, res) => {
    const query = "CALL adminmovie(?)";
    const values = [
        req.body.movieTitle,
        req.body.movieDesc,
        req.body.movieReleaseDate,
        req.body.movieRunTime,
        req.body.movieRating,
        req.body.genreTitle,
        req.body.posterLink,
        req.body.personName
    ];
    db.query(query, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
    
    }
    export const deleteMovie = (req,res) => {
        const query_2 = "DELETE FROM `movies` WHERE `movieTitle`=?;"
        const values_2 = [
            req.body.movieTitle
        ];
        db.query(query_2, [values_2], (err, data) => {
            if (err) return res.send(err);
            //return res.json(data);
        });
    }
    
export const getlogs = (req, res) => {
    const query = "SELECT * FROM logs"
    db.query(query, (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
}

export const getFavMovie = (req, res) => {
    const query = "SELECT MAX(b.movieid) AS favmovie FROM (SELECT COUNT(movieid),movieid FROM favouriteslist GROUP BY movieid) AS b";
    db.query(query, (err, data) => {
        if (err) return res.send(err);
        //return res.json(data);

        const query_2 = "SELECT p.posterLink FROM poster AS p where(p.movieid=?);"
        const value_2 = data[0].favmovie;
        db.query(query_2, [value_2], (err, data) => {
            if (err) return res.send(err);
            return res.json(data);
        });
    });
}
export const getWatchMovie = (req, res) => {
    const query = "SELECT MAX(b.movieid) AS watchmovie FROM (SELECT COUNT(movieid),movieid FROM watchlist GROUP BY movieid) AS b";
    db.query(query, (err, data) => {
        if (err) return res.send(err);
        //return res.json(data);

        const query_2 = "SELECT p.posterLink FROM poster AS p where(p.movieid=?);"
        const value_2 = data[0].watchmovie;
        db.query(query_2, [value_2], (err, data) => {
            if (err) return res.send(err);
            return res.json(data);
        });
    });
}
export const delUser = (req, res) => {
    

    const query_4 = "DELETE FROM `users` WHERE `userName`=?";
    const values_4 = [
        req.body.userName
    ];
    db.query(query_4, [values_4], (err, data) => {
        if (err) return res.send(err);
        //return res.json(data);
    });
}
export const addUser = (req, res) => {
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const query_3 = "INSERT IGNORE INTO users(`userName`,`email`,`password`) VALUES(?);"  
    const values_3 = [
        req.body.userName,
        req.body.email,
        hashedPassword
    ];
    
    db.query(query_3, [values_3], (err, data) => {
        if (err) return res.send(err);
        //return res.json(data);
    });

   
}

export const delGenre = (req, res) => {
    

    const query_5 = "DELETE FROM `genre` WHERE `genreTitle`=?;"
    const values_5 = [
        req.body.genreTitle
    ];
    db.query(query_5, [values_5], (err, data) => {
        if (err) return res.send(err);
        //return res.json(data);
});
}
export const addGenre = (req,res) => {
    const query_3 = "INSERT IGNORE INTO genre(`genreTitle`) VALUES(?);"
    const value_3 = [req.body.genreTitle];
    db.query(query_3, [value_3], (err, data) => {
        if (err) return res.send(err);
        //return res.json(data);
    });
}