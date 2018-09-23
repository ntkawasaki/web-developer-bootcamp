var express = require("express");
var app = express();
var port = 3000;


// ROUTES
app.get("/", function(req, res) {
  res.send("Hi There");
  console.log("/ request")
})

app.get("/bye", function(req, res) {
  res.send("Bye now!");
  console.log("/bye request")
})

app.get("/dog", function(req, res) {
  res.send("DOGS");
  console.log("/dog request")
})


// Tell Express to listen to requests
app.listen(port, function() {
  console.log("Served started");
})
