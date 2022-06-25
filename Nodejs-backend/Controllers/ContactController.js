const Contact = require('../Models/Contact');

async function getContacts() {
    return await Contact.find();
}
  
  
async function addContact(body) {
const {
    name,
    email,
} = body;

const contact = new Contact({
    name,
    email,

});

return await contact.save();
}

  
async function getContactByEmail(email) {
return await contact.findOne({
    email
});
}
  
  
async function getContacts(req, res) {
    try {
        console.log(req.query);

        if (req.query.id) { // ?id=k1231 -> query paramet
        const id = req.query.id;
        const result = await getById(id);
        console.log('result of specific Contact =>', result);
        return res.send(result);
        }

        const result = await getContacts();
        console.log('result =>', result);

        return res.send(result);
        } catch (error) {
        console.log(error);
    }
}
  
  