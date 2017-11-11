// Create the front-end (visuals) for home page, reservation form, and reservation views.

// Create a basic server using Express.JS
var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var app = express();
=======
var path = require(path);
>>>>>>> 5dce8641652675a5921b2098878d3b4f36a5e5a4

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res){
<<<<<<< HEAD
	res.send("")
=======
	res.send("Welcome to the Hottest Restaurant!")
>>>>>>> 5dce8641652675a5921b2098878d3b4f36a5e5a4
})

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(function (req, res){
	res.setHeader('Content-Type', 'text/plain')
	res.write('you posted:\n')
	res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function(){
	console.log("Listening on PORT: " + PORT);
});
// Create a few array variables that will hold the data
var table = [
{
	routeName:
	routeEmail:
	routeID:
	routeNumber:
}];
// Create a set of routes for getting and posting table data

// Create a set of routes for displaying the HTML pages

// Use jQuery to run AJAX calls to GET and POST data from users to the Express server