const express = require('express');
const Console = require("console");
const index = express();
const port = 8000;

index.use(express.static('public'));

index.listen(process.env.PORT || port, ()=>{
    Console.log("Started.....")
})
