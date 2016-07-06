var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000

//MIDDLEWARE
//Bridges the gap us the request and responce cycle
app.use(express.static('public'));
app.use(morgan('dev'));

//Listen
app.listen(port);
console.log("===============")
console.log("Server is running on port " + port);
console.log("===============")