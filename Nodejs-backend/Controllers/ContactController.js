const Contact = require('../Models/Contact');

async function getAllContacts() {
    return await Contact.find();
}
  

async function addContact(req,res) { 
    try{    
        const {
            name,
            email,
            relationship,
            phone,
            location,
            user_id
        } = body;

        const contact = new Contact({body
            });
            return await contact.save();
        } catch(error) {
    return(error)
    }
}


async function deleteContact() {
    console.log('route is working');
}

module.exports = {
    addContact,
    deleteContact,
    getAllContacts
    };