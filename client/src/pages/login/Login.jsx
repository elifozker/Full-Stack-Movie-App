import React from "react"
import { useContext ,useState} from "react"
import { AuthContext } from "../../context/authContext"
import "./login.scss"
import { useNavigate } from "react-router-dom";


const Login=()=>{

    const [inputs,setInputs]=useState({
        username:"",
        password:"",
    });
    const [err,setErr]=useState(null);



    let navigate = useNavigate();

    const handleChange=e=>{//burada inputlarımızı set ediyoruz.
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}));
    };

    const {login} =useContext(AuthContext); //login fonksiyonu
    
    const handleLogin=async (e)=>{


        if(inputs.username=="admin" && inputs.password=="admin1234"){
            
            navigate("/admin");
        }
        else{
            e.preventDefault()//bunu yazmazsak yaptığımız değişikliği görmk için sayfayı yenilememiz gerkeicek.
            try{
                await login(inputs);
              
                
               ;
               navigate("/");
               

            }
            catch(err){
                setErr(err.response.data)
            }
        }
    }

    return(
        <div className="login">
            <div className="container">
                <h1>Letterboxd</h1>
                <form >
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    <div>
                            <span>
                            {err && err}
                            </span>
                        </div>
                    <div className="button">
                       
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className="line"></div>
                </form>
     
                <div className="pcontainer">
                    <p>Login </p>
                    <p>To continue your experience </p>
                    <p>in this magical world</p>
                    <p>Which full of movies</p>
                </div>
                <div className="register2">
                    <span>Don't you have an account?</span>
                    
                        <a href="/register">
                        <button>Register</button>
                        </a>
                        
                    
                </div>
            </div>
        </div>
    )
}

export default Login