const route = require('express').Router()
let abc = "HELLO WORLD";

route.get('/',function (req,res) {
    res.send("HELLO WORLD")
})

module.exports=route