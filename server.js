const express = require('express')
const srv = express();

const inforoute = require('./routes/route')
srv.use(express.json())
srv.use(express.urlencoded ({extended:true}))
srv.use(express.static('public'));

srv.use('/r1', inforoute);

srv.listen(3232, function(){
    console.log("started");
})