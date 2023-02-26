import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const getUser = (req, res) => {
  const token=req.cookies.accessToken;
  //console.log(token)//doğru geliyo tokenı
  
  if(!token) return res.status(401).json("Not logged in!")

  jwt.verify(token,"secretkey",(err,userInfo)=>{
       if (err) 
           return res.status(403).json("Token is not valid")
           const q = "SELECT * FROM users WHERE idusers=?";
           
          db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            const { password, ...info } = data[0];
            return res.json({"users": data});
          });
  })

}
export const updateUser = async(req, res) => {
  
  const token=req.cookies.accessToken;
  //console.log(token)//doğru geliyo tokenı
  
  if(!token) return res.status(401).json("Not logged in!")

  jwt.verify(token,"secretkey",(err,userInfo)=>{
      const salt=bcrypt.genSaltSync(10);
      const hashedPassword=bcrypt.hashSync(req.body.password,salt);
      const q =
      "UPDATE users SET `userName`=?,`email`=?, `password`=? WHERE idusers=? ";
    db.query(
      q,
      [
        req.body.userName,
        req.body.email,
        hashedPassword,
        userInfo.id
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        //return res.status(200).json("updated");
      }
    );

    })

    
};