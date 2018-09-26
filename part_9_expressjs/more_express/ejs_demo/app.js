var express = require("express");
var app = express();
var port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

// ROUTES
// Root
app.get("/", function(req, res) {
  res.render("home");
})

// fallinlovewith
app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {
    thingVar: thing
  });
})

// posts
app.get("/posts", function(req, res) {
  var posts = [{
    title: "Post 1",
    author: "Susy"
  }, {
    title: "Post 2",
    author: "Nic"
  }, {
    title: "Post 3",
    author: "Noah"
  }];

  res.render("posts", {
    posts: posts
  });
})

app.listen(port, function() {
  console.log("Server is listening")
});
