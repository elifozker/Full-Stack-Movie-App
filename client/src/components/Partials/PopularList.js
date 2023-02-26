import React from 'react'
import "../../styles/PopularList.css";
import { useState, useEffect } from 'react'
import axios from "axios";



const PopularList = () => {

    const [favMoviePoster, setfavMoviePoster] = useState([]);
    const [watchMoviePoster, setwatchMoviePoster] = useState([]);

    useEffect(() => {
        const fetchfavMovie = async () => {
            try {
                const res = await axios.get("http://localhost:8800/server/admin/fav", { withCredentials: true })
                console.log(res);
                setfavMoviePoster(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchfavMovie();
        const fetchwatchMovie = async () => {
            try {
                const res = await axios.get("http://localhost:8800/server/admin/watch", { withCredentials: true })
                console.log(res);
                setwatchMoviePoster(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchwatchMovie();
    }, []);


    return (
        <>
            <div className="popular-list">
                {favMoviePoster.map(poster => (
                    
                        <img src={poster.posterLink} alt="" className="img1" />
                    
                ))}
                <h2 className='desc-1'>In Los Angeles during the Roaring Twenties,<br /> Manuel "Manny" Torres, a Mexican immigrant<br /> and aspiring filmmaker, works odd jobs peripheral<br /> to the burgeoning silent film industry.</h2>
                <h3 className='fav'>The most favourite movie today!</h3>
            </div>
            <div className="popular-list">
                {watchMoviePoster.map(poster => (
                    <img src={poster.posterLink} alt="" className="img2" />

                ))}
                <h2 className='desc-2'>The film follows two lifelong friends who find themselves<br/> at an impasse when one abruptly ends their relationship, with<br/> alarming consequences for both of them; Kerry and Barry<br/> also star. It reunites Farrell and Gleeson, who previously worked<br/> together on McDonagh's directorial debut In Bruges.</h2>
                <h3 className='watch'>The most popular movie today!</h3>
            </div>
        </>
    )
}
export default PopularList