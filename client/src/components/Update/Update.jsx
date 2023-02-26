import axios, { Axios, makeRequest } from "axios"
import React, { useState, useEffect, useContext } from "react"
import "./update.scss"; 

const Update = ({ setOpenUpdate }) => {

    const [texts, setTexts] = useState({
        userName: "",
        email: "",
        password: ""

    });
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null//local storageda bir user olup olmadığını kontrol ediyor. Eğer yoksa null atıyor. // Burda da stringi alıp objeye çeviriyorum.
    );

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
        //console.log(texts.userName + texts.email + texts.password);
    }
    const handleSubmit = async () => {

        try {
            //console.log(newData.userName+"handleupdate");      
            await axios.put("http://localhost:8800/server/profile", texts, { withCredentials: true });
            //window.location.reload();
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="profile">
            <div className="images">
            <img
          src="https://cdn2.vectorstock.com/i/1000x1000/00/61/movie-time-neon-logo-cinema-night-neon-vector-21560061.jpg"
          alt=""
          className="profilePic"
        />  
        </div>
            <div className="updating">
                <form>
                    <input type="text" name='userName' placeholder={currentUser.userName} onChange={handleChange}></input>
                    <input type="text" name='email' placeholder={currentUser.email} onChange={handleChange}></input>
                    <div className="button">
                    <button onClick={handleSubmit}>Update </button>
                    </div>
                </form>
                
            </div>

        </div>
    )
}

export default Update