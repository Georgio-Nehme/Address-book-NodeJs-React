const express = require('express')
const router = express.Router()
const { getAllContacts, addContact, deleteContact } = require('../Controllers/contactController')


//retrieve all contacts related to a user on login
router.get("/all_contacts", getAllContacts);
//create a contact 
router.post("/add_contact", addContact);
//delete a contact
router.delete("/delete_contact", deleteContact);

module.exports = router