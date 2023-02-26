import React from 'react'
import { useState,useEffect} from 'react'
import "../../styles/Admin.css";
import axios from "axios";
import AdminGenre from "./AdminGenre";
import AdminUser from "./AdminUser";
const Admin = () => {
    const [movie, setMovie] = useState({
        movieTitle: "",
        movieDesc: "",
        movieReleaseDate: "",
        movieRunTime: null,
        movieRating: null,
        genreTitle:"",
        posterLink:"",
        personName: "",

    });

    const [logs,setlogs]=useState([])
    const [err,setErr]=useState(null);
    const [favMoviePoster,setfavMoviePoster]=useState([]);
    const [watchMoviePoster,setwatchMoviePoster]=useState([]);
   


    useEffect(()=>{
        const fetchAlllogs=async ()=>{
            try{
                const res=await axios.get("http://localhost:8800/server/admin",{withCredentials:true})
                console.log(res);
                setlogs(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchAlllogs()
    },[]);
      
    const handleChange = (e) => {
        setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        //console.log(movie.movieTitle);
       
    }
    const handleClick = async e => {
        e.preventDefault()
        try {
            console.log(movie);
            await axios.post("http://localhost:8800/server/admin", movie);
           
                    
        }
        catch (err) {
            setErr(err.response.data);
        }
    }
    return (

        <div className="new-movie">
            <div className="admin-container">
            <div className='welcome'>Welcome to Admin Page</div>
            </div>
           
            <div className="form">
                <h1 className='add'>Add new movie</h1>               
                <input id='input_1' type="text" placeholder="movieTitle" onChange={handleChange} name='movieTitle'></input>
                <input id='input_2' type="text" placeholder="movieDesc" onChange={handleChange} name='movieDesc'></input>
                <input id='input_3' type="text" placeholder="movieReleaseDate" onChange={handleChange} name='movieReleaseDate'></input>
                <input id='input_4' type="number" placeholder="movieRunTime" onChange={handleChange} name='movieRunTime'></input>
                <input id='input_5' type="number" placeholder="movieRating" onChange={handleChange} name='movieRating'></input>
                <input id='input_6' type="text" placeholder="genreTitle" onChange={handleChange} name='genreTitle'></input>
                <input id='input_7' type="text" placeholder="posterLink" onChange={handleChange} name='posterLink'></input>
                <input id='input_8'type="text" placeholder="director" onChange={handleChange} name='personName'></input>
            </div>
            <button className='btn-1' onClick={handleClick}>AddMovie</button>
            <AdminGenre/>
            <AdminUser/>

            <div className='logs'>LOGS</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>Login</th>
                            <th>Register</th>
                            <th>Watchlist</th>
                            <th>Favourites</th>
                            <th>movieid</th>
                        </tr>
                    </thead>
                    {logs.map(log=>(
                    <tbody key={log.idlogs}>
                    <tr>
                    <td>{log.userid}</td>
                    <td> {log.login} </td>
                    <td> {log.register} </td>
                    <td> {log.addtowatchlist} </td>
                    <td>{log.addtofavourites} </td>
                    <td>{log.movieid} </td>
                    </tr>
                   
                </tbody>
            ))}
                </table>
            </div>
        </div>
    )
}

export default Admin;