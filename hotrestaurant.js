// Create the front-end (visuals) for home page, reservation form, and reservation views.

// Create a basic server using Express.JS
var express = require("express");
var bodyParser = require("body-parser");
var path = require(path);

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('./html-routes.js')(app);

app.listen(PORT, function(){
	console.log("Listening on PORT: " + PORT);
});
// Create a few array variables that will hold the data

// Create a set of routes for getting and posting table data

// Create a set of routes for displaying the HTML pages

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server