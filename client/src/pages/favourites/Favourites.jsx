import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import "./favourites.scss";
import { Link, Navigate } from "react-router-dom";
import List from "../../components/MovieH/List/List"
import Footer from "../../components/Footer";


const Favourites=()=>{
    const [favourites,setFavourites]=useState([])

    useEffect(()=>{
        const fetchAllFavourites=async ()=>{
            try{
                const res=await axios.get("http://localhost:8800/api/favourites",{withCredentials:true})
                //console.log(res);
                setFavourites(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchAllFavourites()
    },[favourites]);

    const handleRemove=async (movieID)=>{
        try{
            await axios.delete("http://localhost:8800/api/favourites/remove/"+movieID,{withCredentials:true});
            window.location.reload();
        }
        catch(err){
            console.log(err)

        }
    }
 


    return (
        <div className="h-container">
             <div className="h-row">    
             <div className="line"></div>
                <div className="h-col">
                
                    <List list={favourites}/>
                </div>
            </div>
        <div className="container-footer">
            <Footer/>
         </div>
        </div>)
    
    
    // <div>
    //     <h1>Favourites</h1>
    //     <div className="favourites">
    //         {favourites.map(movie=>(
    //             <div className="movie" key={movie.movieid}>
    //                 <img src={movie.posterLink} alt="" /> 
    //                 <h2>{movie.movieTitle}</h2>
    //                 <button className="remove" onClick={()=>handleRemove(movie.movieid)}>Dislike</button>
    //             </div>
    //         ))}
    //     </div>
    // </div>
}


export default Favourites