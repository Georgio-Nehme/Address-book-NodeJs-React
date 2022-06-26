import React , { useState } from "react";
import { useLocation ,useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function login() {
        let user = {email, password};
        console.log(user);
        let result = await fetch("http://localhost:5000/users/login",{ 
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type": "Application/json",
                "Accept":"Application/json"
            }
        
        })
        result = await(result) 
        console.log("result",result)

    };



    
    
    return ( 
        <div className="login_page">
            <h1>Login</h1>
            <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}type="password"></input>
            <button onClick={login}>Login</button>
            
        </div>
    );

}

 
export default LoginPage;