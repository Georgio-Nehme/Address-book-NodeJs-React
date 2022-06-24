const express = require('express')
const router = express.Router()


router.get("/", (req,res)=>{
    res.json({"message":"users"});

    //connect this to the UserController
})


module.exports = router