var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.static("myApp"));


app.use(cors({
    'allowedHeaders': ['api_key', 'Content-Type', 'auth_token'],
    'exposedHeaders': ['api_key'],
    'origin': '*',
    'methods': 'GET,PUT,POST,DELETE',
    'preflightContinue': false

}));

app.get('/', function (req, res, next) {
    res.redirect('/');
});

app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");