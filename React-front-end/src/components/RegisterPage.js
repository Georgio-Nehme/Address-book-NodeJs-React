import React , { useState } from "react";



const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUp() 
    {
        let newUser = { name , email, password};
        console.log(newUser);
        let result = await fetch("http://localhost:5000/users/register",{ 
            method:'POST',
            body:JSON.stringify(newUser),
            headers:{
                "Content-Type": "Application/json",
                "Accept":"Application/json"
            }
        
        })
        result = await result.json()
        console.log("result",result)
        localStorage.setItem("user_id", JSON.stringify(result))
    };


    return (  
        <div className="register">
            <h1>Register</h1>
            <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}type="password"></input>
            <button onClick={signUp}>Register</button>
        </div>
     );
}
 
export default Register;