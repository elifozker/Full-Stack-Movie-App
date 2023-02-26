import React from 'react'
import { useState } from 'react'
import "../../styles/AdminGenre.css";
import axios from "axios";

const AdminGenre = () => {
    const [genre, setGenre] = useState({
       genreTitle:""
    });
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setGenre((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/server/admin/addGenre", genre);
        }
        catch (err) {
            setErr(err.response.data);
        }
    }
    const handleClick2 = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/server/admin/delGenre", genre);
        }
        catch (err) {
            setErr(err.response.data);
        }
    }
    return (

        <div className="admin">
            <div className="add-genre">
                <div className="form">
                    <h1>Add New Genre</h1>
                    <input id='input_1' type="text" placeholder="genreTitle" onChange={handleChange} name='genreTitle'></input>                
                </div>
                <button id='addgenre' onClick={handleClick}>Add Genre</button>

            </div>
            <div className="delete-genre">
                <div className="form">
                    <h1>Delete Genre</h1>
                    <input id='input_1' type="text" placeholder="genreTitle" onChange={handleChange} name='genreTitle'></input>                
                </div>
                <button id='deletegenre' onClick={handleClick2}>Delete Genre</button>
            </div>
        </div>
    )
}

export default AdminGenre;