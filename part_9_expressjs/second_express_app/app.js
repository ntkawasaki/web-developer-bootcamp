// Set Up
var express = require("express");
var app = express();
var port = 3000;

// ROUTES
// Home page
app.get("/", function(req, res) {
  res.send("Hi, welcome to my assignment");
  console.log("/ Request");
})

// Animal
app.get("/speak/:animal", function(req, res) {
  var sounds = {
    cow: "moo",
    pig: "oink",
    dog: "woof",
    cat: "meow",
    lion: "roar"
  }

  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal].toUpperCase();

  res.send("The " + animal + " says '" + sound + "'");
  console.log("/speak/:animal Request --- " + animal + ": " + sound);
})

// Repeat
app.get("/repeat/:phrase/:num", function(req, res) {
  var phrase = req.params.phrase;
  var num = req.params.num;
  var string = "";

  for (var i = 0; i < num; i++) {
    string += phrase + " ";
  }

  res.send(string);
  console.log("/repeat/:phrase/:num --- " + phrase + ": " + num);
})

// Safety
app.get("*", function(req, res) {
  res.send("Sorry, page not found...");
  console.log("/* Request");
})

// Listen
app.listen(port, function() {
  console.log("Served started");
})
