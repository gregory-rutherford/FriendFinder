var express = require("express");
var router = express.Router();
var friends = require("../Data/friends");

router.use(function(req, res, next) {
  console.log("Time:", Date.now());
  next();
});

router.get("/api/friends", function(req, res) {
  return res.json(friends);
});

router.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friend;

  console.log(chosen);
  //return friend if routeName matches input
  for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].routeName) {
      return res.json(friends[i]);
    }
  }

  return res.json(false);
});

module.exports = router;
