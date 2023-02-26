import { createContext,useEffect,useState } from "react";
import axios from "axios";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser] =useState(
        JSON.parse(localStorage.getItem("user")) || null//local storageda bir user olup olmadığını kontrol ediyor. Eğer yoksa null atıyor. // Burda da stringi alıp objeye çeviriyorum.
    );

    const login=async (inputs)=>{// api bizim user informationımızı gönderecek burada
        //TO DO /setcurrent user=currentuser objesi

        const res=await axios.post("http://localhost:8800/api/auth/login",inputs,{
            withCredentials:true // cookilerle çalışyıoruz. Bunu böyle yapmazsak problemlerle karşılaşabiliriz. Muhtemelen tokenımızı alıyo.
        });//bu inputları login page'inden alıyoruz.

        setCurrentUser(res.data)//backend bize userı ve cookiesini döndürecek
        
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser)); //ne zaman user'ı değiştirirsek onu local storage'a yazarız.Current user, user'ın profile pic'ini id'sini vs tutacak yani bir obje olucak.Ama local storage'da string tutabiliyorum o yüzden bunu string'e çevirmem gerekiyor
    },[currentUser]);

    return(//bu sayede current user informationını her yerde kullanabilicez.
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    );
};