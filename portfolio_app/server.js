//==============
// Requirements
//==============
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;

//==============
// Middleware
//==============
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(cookieParser());

//==============
// Controllers
//==============
// var viewersController = require('/contollers/viewers.js')
// app.use('/', viewersController);

//==============
// Listen
//==============
app.listen(port);
console.log('==========================');
console.log("(☞ ͡° ͜ʖ ͡°)☞ You da man!");
console.log('==========================');