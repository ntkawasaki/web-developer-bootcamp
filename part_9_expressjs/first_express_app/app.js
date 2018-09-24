var express = require("express");
var app = express();
var port = 3000;


// ROUTES
app.get("/", function(req, res) {
  res.send("Hi There");
  console.log("/ request");
})

app.get("/bye", function(req, res) {
  res.send("Bye now!");
  console.log("/bye request");
})

app.get("/dog", function(req, res) {
  res.send("DOGS");
  console.log("/dog request");
})

app.get("/r/:subredditName/", function(req, res) {
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " COMMENTS");
})

// *
app.get("*", function(req, res) {
  res.send("You are a STAR");
  console.log("*");
})



// Tell Express to listen to requests
app.listen(port, function() {
  console.log("Served started on port: " + port);
})
