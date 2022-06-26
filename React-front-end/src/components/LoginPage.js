import React , { useState } from "react";
import { Navigate, useLocation ,useNavigate } from "react-router-dom";


const login = async (info) => {
    try {
        // let navigate = useNavigate();
        const res = await fetch("http://localhost:5000/users/login",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(info)
        });
        console.log(res)
        const data = await res.json();
        localStorage.setItem("token",data.token)
        localStorage.setItem("user_id",data._id);
        return data;
        
        
    } catch (error){
        console.log(error)
    }
};




const LoginPage = () => {

            
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        login({ email, password});
      };

    return ( 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="login_page">
                <h1>Login</h1>
                <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}type="password"></input>
            
            </div>
            <input type={"submit"} value="Login" className="login_button" />
        </form>
    );

}

 
export default LoginPage;