var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var User = require('./User.js');

function logger(req, res, next){
	console.log(new Date(), req.method, req.url);
    next();   
}
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(logger);
app.use(express.static('www'))
app.get('/User', User.findAll);
app.get('/User/search', User.search);
app.get('/User/role/:role', User.role);
app.get('/User/expired', User.expired);


app.listen(3000);
console.log('Server is running at http://localhost:3000');