//Dependencies 
var express = require("express");
var path = require("path");
var routesHtml = require("./App/routing/htmlRoutes");
var routesApi = require("./App/routing/apiRoutes");
//================================
var app = express();
var PORT = process.env.PORT || 3000;

//Set up app for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set up app to use route exports
app.use(routesHtml);
app.use(routesApi);


//Confirm server is on
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

