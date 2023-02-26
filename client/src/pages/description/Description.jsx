import React,{ useState ,useEffect} from "react"
import "./description.scss"
import { makeRequest } from "../../axios"
import { useLocation } from "react-router-dom"
import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import axios from "axios";
const Description = ({movieid}) => {

    const [detailed, setDetailed] = useState([{}]);
    const [loading, setLoading] = useState(false);

    const id = window.location.pathname.split("/")[2];

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/server/detail/${id}`);
          setDetailed(res.data);
          
          console.log(detailed);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [id]);

    return (
      
       <div className="detail" style={{}}>
                           
        {(typeof detailed.movies == "undefined") ? (
            <p>Loading...</p>
        ): (
            detailed.movies.map(movies =>
            (
              
                [
                  
                <div className="title"><h1>{movies.movieTitle}</h1></div>,
                <div className="date">Release Date: {movies.movieReleaseDate}</div>,
                <div className="time">Run Time: {movies.movieRunTime}</div>,
                <div className="rating">Rating: {movies.movieRating}</div>,
                <div className="star">
                <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" alt="" />
                </div>,
                <div className="desc">{movies.movieDesc}</div>,
                
                <div className="director">Directed by: {movies.personName}</div>,
                <div className="poster">
                    <img src={movies.posterLink} alt="" className="poster"/>
                </div>
                
            ]
            ))
            
        )}
       </div>
    )
}
export default Description;