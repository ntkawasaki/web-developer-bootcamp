// Set up
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;
var friends = ["Kai", "Thomas", "Milli", "Macallan", "Spencer"];

// Turn request body into JSON so we can use it
app.use(bodyParser.urlencoded({
  extended: true
}));

// So we dont have to end files with .ejs
app.set("view engine", "ejs");


// GET root
app.get("/", function(req, res) {
  res.render("home");
})


// POST addFriend
app.post("/addfriend", function(req, res) {
  // Comes from input
  var newFriend = req.body.newfriend;
  friends.push(newFriend);

  res.redirect("/friends");
})


// GET friends
app.get("/friends", function(req, res) {
  res.render("friends", {
    friends: friends
  });
})





app.listen(port, function() {
  console.log("Server started on " + port);
})
