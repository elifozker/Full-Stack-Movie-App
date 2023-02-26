import React from "react"
import { Link } from "react-router-dom"
import "./register.scss"
import axios from "axios";
import { useState } from "react";

const Register=()=>{

    const string="";

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
    })
    const [err,setErr]=useState(null);

    const handleChange=e=>{//burada inputlarımızı set ediyoruz.
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}));
    };

    const handleClick= async e=>{//burada request yapcaz, async olmalı api requestler async olur
        e.preventDefault()//butona tıklayınca sayfa refresh olmasın

        try{
            await axios.post("http://localhost:8800/api/auth/register",inputs)
            
        }
        catch(err){
            setErr(err.response.data);

            
        }
            
    };
            
    return(
        <div className="register">
            <div className="container">
                <h1>Letterboxd</h1>
                <form >
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    <div>
                        {err&&err}
                        </div>
                    <div className="button">
                        <button onClick={handleClick}>Register</button>
                    </div>
                    <div className="line"></div>
                </form>

                <div className="pcontainer">
                    <p>Register for</p>
                    <p>Track films you’ve watched.</p>
                    <p>Save those you want to see.</p>
                    <p>Like those you really liked</p>
                    <p>Tell your friends what’s good. </p>
                </div>
                <div className="login2">
                    <span>Do you have an account?</span>
                    
                        <a href="/login">
                        <button>LOGIN</button>
                        </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Register