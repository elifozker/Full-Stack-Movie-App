import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=(req,res)=>{
    //CHECK USER IF EXITS
    const query="SELECT * FROM users WHERE userName= ?"

    db.query(query,[req.body.username],(err,data)=>{
        if(err) 
            return res.status(500).json(err)
        if(data.length)  
            return res.status(409).json("User already exists!")
        
        //CREATE A NEW USER
            //HASH THE PASSWORD

        const salt=bcrypt.genSaltSync(10);
        const hashedPassword=bcrypt.hashSync(req.body.password,salt);

        const query="INSERT INTO users (`userName`,`email`,`password`) VALUE (?) ";
        const values=[req.body.username,req.body.email,hashedPassword];

        db.query(query,[values],(err,data)=>{
            if(!err){
                //res.status(500).json(err);
                return res.status(409).json("You registered succesfully!")
            }

        });
        const idquery="SELECT idusers FROM users WHERE userName=?";
        db.query(idquery,[req.body.username],(err,data)=>{
            if(!err){
                //res.status(500).json(err);
                //return res.status(409).json("You registered succesfully!")
            }
            const logquery="INSERT INTO logs (`userid`,`login`,`register`,`addtowatchlist`,`addtofavourites`) VALUE (?)";
            const logvalues=[data[0].idusers,"no","yes","no","no"];
            db.query(logquery,[logvalues],(err,data)=>{
            if (err) return res.status(500).json(err);
                //res.status(500).json(err);
                //return res.status(200).json("log added into logs");
            });
            })
        });  
}

export const login=(req,res)=>{

    const query="SELECT * FROM users WHERE userName = ?"
    db.query(query,[req.body.username],(err,data)=>{//select * yapıyoruz normalde bize where koşulunu sağlayan tüm dataları barından data arrayinin döndürüyo. Ama burada aynı usernae'e sahip sadece bir tane data olacağı için bir tane bir şey döndüryr
        if(err) 
            return res.status(500).json(err)
        if(data.length ===0) 
            return res.status(404).json("User not found!");

        const checkPassword=bcrypt.compareSync(req.body.password,data[0].password);

        if(!checkPassword) 
            return res.status(400).json("Wrong password or username!");

    const id=data[0].idusers;
    //console.log(id);//doğru

    const token=jwt.sign({id},"secretkey");//kullanıcı giriş yaptığı gibi ona bi token veriyoruz.data[0]'ı verince bir kullanıcının token'ı hep aynı oluyor.hashlenmiş bi şekilde userID'yi barındırıyo içinde.Token aslında bir cookie.

    const {password,...others}=data[0];

    res.cookie("accessToken",token,{//oluşan bu tokenı cookie yardımıyla websitemize gönderiyoruz.
        httpOnly:true,//random script can not use our cookie
    }).status(200).json(others)//userımızı döndürcek paswordü hariç

    const logquery="INSERT INTO logs (`userid`,`login`,`register`,`addtowatchlist`,`addtofavourites`) VALUE (?)";
    const logvalues=[id,"yes","no","no","no"];
    db.query(logquery,[logvalues],(err,data)=>{
        if (err) return res.status(500).json(err);
                //return res.status(200).json("log added into logs");
            });
        
    });  


};

export const logout=(req,res)=>{
    res.clearCookie("accesToken",{
        secure:true,
        sameSite:"none" // reactkısmı 3000 de burası 8800 de çalışıyor eğer bunu none yazmazsak react tarafına cookie gönderemeyebiliriz.
    }).status(200).json("User has been logged out!")
};