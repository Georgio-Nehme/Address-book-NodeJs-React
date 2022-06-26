const Contact = require('../Models/Contact');
// const User = require('../Models/User');

async function getAllContacts(req, res) {
  Contact.find({user_id : req.body.user_id})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving contacts."
    });
  });
}
  
// Create and Save a new contact
async function addContact(req,res) { 

    if (!req.body.name) {
      res.status(400).send({ message: "Contact should have a name"});
      return;
    }
    // Create a contact
    const contact = await new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      relationship: req.body.relationship,
      location: req.body.location,
      user_id: req.body.user_id
    });
    // Save Contact in the database
    contact.save(contact)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contact."
      });
    });
  };





async function deleteContact(req,res) {

  await Contact.remove({id: req.body.id});
    res.send({ 
      message: "Contact deleted successfully"
    })
};
   


module.exports = {
    addContact,
    deleteContact,
    getAllContacts
    };