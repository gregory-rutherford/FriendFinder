var express = require("express");
var router = express.Router();
var path = require("path");

router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next();
  })

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/home.html"));
  });

  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey.html"));
  });


module.exports = router;