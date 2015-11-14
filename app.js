var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var apiRouter = require('./app/config/routes.js');

// configure bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// connect to mongo DB
mongoose.connect('mongodb://localhost:27017/articles-database')

app.use('/api', apiRouter);

app.get('/', function(request, response) {
  response.json({message: 'times are a changin'});
});

app.listen(3000);

console.log('Server is running on port 3000')
