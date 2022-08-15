const express = require('express');
const Console = require("console");
const index = express();

index.use(express.static('public'));

index.listen(8000, ()=>{
    Console.log("Started.....")
})
