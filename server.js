//Dependencies 
var express = require("express");
var path = require("path");
var routes = require("./App/routing/htmlRoutes");
//================================
var app = express();
var PORT = process.env.PORT || 3000;

//Set up app for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);


//Confirm server is on
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

