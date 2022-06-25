require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());


//Routing for users
const userRouter = require('./routes/users')
app.use('/users', userRouter)



//Routing for contacts
const contactRouter = require('./routes/contacts')
app.use('/contacts', contactRouter)


app.listen(5000, () => {console.log('server started on port 5000');});


//DB Connection
const DB_CONNECT = process.env.DB_CONNECT || "";
// mongoose.connect(DB_CONNECT).then(() => console.log("Connected to DB")).catch((error)=>{
//     console.log(error)
// });


mongoose
.connect(DB_CONNECT)
.then(() => {
  console.log("Successfully connected to database");
})
.catch((error) => {
  console.log("database connection failed. exiting now...");
  console.error(error);
  process.exit(1);
});







