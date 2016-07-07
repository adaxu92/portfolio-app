//==============
// Requirements
//==============
var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;

//==============
// Middleware
//==============
app.use(express.static('public'));
app.use(morgan('dev'));


//==============
// Listen
//==============
app.listen(port);
console.log('==========================');
console.log("(☞ ͡° ͜ʖ ͡°)☞ You da man!");
console.log('==========================');