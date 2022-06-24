require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

//DB Connection
const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log('connected to db'));

const app = express();


//Routing for users
const userRouter = require('./routes/users')
app.use('/users', userRouter)




//Routing for contacts
const contactRouter = require('./routes/contacts')
app.use('/contacts', contactRouter)







app.listen(5001, () => {
    console.log('server started on port 5001');
});

