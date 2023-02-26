import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import {AuthContext}  from "../../../../context/authContext";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";




const ProductList = ({ item }) => {



   let navigate = useNavigate();
    const routeChange = (movieid) => {
        //let path = `/description/` + movieid;
        //return <Navigate to = "/description${movieid}"/>
        navigate(`/description/` + movieid)
    }

    let movieid=item.movieid;
    const[moviesinWatchlist,setmoviesinWatchlist]=useState([]);
    const[moviesinFavourites,setmoviesinFavourites]=useState([]);


    //const[isinWatchlist,setisinWatchlist]=useState(false);
    const {currentUser}=useContext(AuthContext)

    
    useEffect(()=>{
        const fetchAllWatchlists=async ()=>{
            //console.log("userid: ",currentUser.idusers)
            try{
                const res=await axios.get("http://localhost:8800/api/watchlist/"+movieid,{withCredentials:true})
                //console.log(res);
                //console.log(res.data);
                //setisAddedW(res.data);
                setmoviesinWatchlist(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchAllWatchlists()

        const fetchAllFavourites=async ()=>{
            //console.log("userid: ",currentUser.idusers)
            try{
                const res=await axios.get("http://localhost:8800/api/favourites/"+movieid,{withCredentials:true})
                //console.log(res);
                //console.log(res.data);
                //setisAddedW(res.data);
                setmoviesinFavourites(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchAllFavourites()
    },[moviesinFavourites,moviesinFavourites]);

    const handleWatchlist=async (movieID,userid)=>{
        
        console.log(userid);
        try{
            
            await axios.post("http://localhost:8800/api/watchlist/add/"+movieID,{userid:userid},{withCredentials:true});
            //window.location.reload();
        }
        catch(err){
            console.log(err)
        }

    }
    const handleFavourites=async (movieID,userid)=>{
        
        console.log(userid);
        try{
            
            await axios.post("http://localhost:8800/api/favourites/add/"+movieID,{userid:userid},{withCredentials:true});
            //window.location.reload();
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        
        <div className="movie-caro" key={item.movieid}>
            <img className="image" src={item.posterLink} alt={item.movieid} onClick={(e)=>{
            routeChange(item.movieid);
            }}></img>
            <div className="caro-body">
                <h5 className="mtitle">{item.movieTitle}</h5>
                
                {moviesinFavourites.includes(currentUser.idusers) ? <span className="material-symbols-outlined" id="addedFIcon" onClick={()=>handleFavourites(item.movieid,currentUser.idusers)}>
                    <FavoriteIcon fontSize="small"/>
                </span>:<span className="material-symbols-outlined" id="addFIcon" onClick={()=>handleFavourites(item.movieid,currentUser.idusers)}>
                    <FavoriteBorderIcon fontSize="small"/>
                </span>}

                
                
                    {moviesinWatchlist.includes(currentUser.idusers) ? <span className="material-symbols-outlined" id="addedWIcon" onClick={()=>handleWatchlist(item.movieid,currentUser.idusers)}>
                    playlist_add_check
                </span>:<span className="material-symbols-outlined" id="addWIcon" onClick={()=>handleWatchlist(item.movieid,currentUser.idusers)}>
                    playlist_add
                </span>}
                
                <h5 className="rating">{item.movieRating}</h5>
                <span className="material-symbols-rounded" id="star">
                    star
                </span>
            </div>


        </div>
    )
}

export default ProductList