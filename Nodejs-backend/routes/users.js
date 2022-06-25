const express = require('express')
const router = express.Router()
const { register, login, addUser } = require('../Controllers/userController')
const User = require('../Models/User')

router.post('/register', register);


router.post('/login', login);
router.post('/add_user', addUser);

module.exports = router