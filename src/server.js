const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000 ;


app.use(express.static('public'));


app.listen(PORT , ()=>console.log(`Server Running on ${PORT}`))
