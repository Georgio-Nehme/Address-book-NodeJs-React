import React , { useState } from "react";

const CreateContact = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [relationship, setRelationship] = useState('');
    const user_id = localStorage.getItem('user_id');

    async function addContact() {
        let newContact = { name , email, phone, relationship, user_id};
        console.log(newContact);
        let result = await fetch("http://localhost:5000/contacts/add_contact",{ 
            method:'POST',
            body:JSON.stringify(newContact),
            headers:{
                "Content-Type": "Application/json",
                "Accept":"Application/json"
            }
        })
        result = await result.json()
        console.log("result",result)
    };

    return (
        <div className="create_contact">
            <h1>Create Contact</h1>
            <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <input placeholder="Relationship" value={relationship} onChange={(e)=>setRelationship(e.target.value)}></input>
            <button onClick={addContact}>Create Contact</button>
        </div>
    );
}
 
export default CreateContact;