const express = require("express");
const router = express.Router();
const friends = require("../Data/friends");

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
  let bestFriend = 0; //placeholder for index of friend object
  let user = req.body;
  let maxDiff = 25;
  for (let i = 0; i < friends.length; i++) {
    let diff = 0;
    let score = 0;
    let scores = user.scores;
    for (let x = 0; x < scores.length; x++) {
      score = Math.abs(friends[i].scores[x] - user.scores[x]);
      if (score > 0) diff += score;
    }
    if (diff < maxDiff) {
      maxDiff = diff;
      bestFriend = i;
    }
  }
 
  friends.push(user);
  res.json(friends[bestFriend]);
});


module.exports = router;
