const route = require('express').Router()

route.get('/',function (req,res) {
    res.send("HELLO WORLD")
})

module.exports=route