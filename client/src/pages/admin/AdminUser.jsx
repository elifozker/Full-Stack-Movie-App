import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../styles/AdminUser.css";

const AdminUser = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    });
    const [err, setErr] = useState(null);
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleClick = async e => {
        e.preventDefault()
        try {
            console.log(user);
            await axios.post("http://localhost:8800/server/admin/addUser", user);
        }
        catch (err) {
            setErr(err.response.data);
        }
    }
    const handleClick2 = async e => {
        e.preventDefault()
        try {
            console.log(user);
            await axios.post("http://localhost:8800/server/admin/delUser", user);
        }
        catch (err) {
            setErr(err.response.data);
        }
    }
    return (
        <div className="admin">
            <div className="add-user">
                <div className="form">
                    <h1>Add New User</h1>
                    <input id='input_1' type="text" placeholder="userName" onChange={handleChange} name='userName'></input>
                    <input id='input_2' type="text" placeholder="email" onChange={handleChange} name='email'></input>
                    <input id='input_3' type="text" placeholder="password" onChange={handleChange} name='password'></input>
                </div>
                <button id='adduser' onClick={handleClick}>Add User</button>
            </div>
             <div className="delete-user">
                <div className="form">
                    <h1>Delete User</h1>
                    <input id='input_1' type="text" placeholder="userName" onChange={handleChange} name='userName'></input>
                </div>
                <button id='deleteuser' onClick={handleClick2}>Delete User</button>
            </div>
        </div>
    )
}

export default AdminUser;