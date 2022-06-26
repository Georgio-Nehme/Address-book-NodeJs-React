import { useState, useEffect} from "react";
import axios from 'axios';



const ContactsPage = () => {

    const { user_id } = localStorage.get('user_id')

    const [contacts, setContacts] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:5000/contacts/all_contacts')
        .then(response =>{
            setContacts(response.data)
        }), []}
    ).then(console.log(contacts))

    return ( 
        <div className="contacts_page">
            <div className="filter_bar">
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Phone"/>
                <input placeholder="Relationship"/>
                <button>Filter</button>
            </div> 

            <table className="contacts_table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Relationship</th>
                    <th>Location</th>
                    <th>Setings</th>
                </tr>
            </table> 

        </div>

            

            

     );
}
 
export default ContactsPage;