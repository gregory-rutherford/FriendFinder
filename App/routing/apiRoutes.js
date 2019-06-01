var express = require("express");
var router = express.Router();
var friends = require("../Data/friends");
var match = [];

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

router.post("/api/friends", function(req, res) {
  
  friends.push(req.body);
  res.json(req.body);
  var difference = 0;
  match = [];
  //grab the users score and converts it to numbers for comparison
  var userScore = req.body.scores;
  var storage = userScore.toString();
  var userScoreNum = storage.split(",").map(function(item){
    return parseInt(item, 10);
  })
  console.log(userScoreNum);
  // loop through friends array
  for (var i = 0; i < friends.length; i++){
    var friendScores = friends[i].scores;
    console.log(friendScores);
  }
  //do the math on all the scores
  //return the least amount of difference
});

module.exports = router;
