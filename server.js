//Dependencies 
const express = require("express");
const path = require("path");
const routesHtml = require("./App/routing/htmlRoutes");
const routesApi = require("./App/routing/apiRoutes");
//================================
const app = express();
const PORT = process.env.PORT || 3000;

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

