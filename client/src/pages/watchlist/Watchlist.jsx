import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import "./watchlist.scss";
import List from "../../components/MovieH/List/List"
import Footer from "../../components/Footer";


const Watchlist=()=>{
    const [watchlist,setWatchlist]=useState([])

    useEffect(()=>{
        const fetchAllMovies=async ()=>{
            try{
                const res=await axios.get("http://localhost:8800/api/watchlist",{withCredentials:true})
                //console.log(res);
                setWatchlist(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchAllMovies()
    },[watchlist]);

    const handleRemove=async (movieID)=>{
        try{
            await axios.delete("http://localhost:8800/api/watchlist/remove/"+movieID,{withCredentials:true});
            //window.location.reload();
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
                
                    <List list={watchlist}/>
                </div>
            </div>
        <div className="container-footer">
            <Footer/>
         </div>
        </div>)








    // <div>
    //     <h1>Watchlist</h1>
    //     <div className="watchlist"> 
    //         {watchlist.map(movie=>(
    //             <div className="movie" key={movie.movieid}>
    //                 <button>
    //                     <img src={movie.posterLink} alt="" /> 
    //                 </button>
    //                 <h2>{movie.movieTitle}</h2>
    //                 <button className="remove" onClick={()=>handleRemove(movie.movieid)}>Remove</button>
    //             </div>
    //         ))}
    //     </div>
    // </div>
}


export default Watchlist