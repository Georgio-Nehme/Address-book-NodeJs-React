require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');


const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log('connected to db'));

const app = express();

app.listen(5000, () => {
    console.log('server started on port 5000');
});

