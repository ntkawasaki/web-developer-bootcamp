// &apikey=thewdb
var express = require("express");
var app = express();
var request = require("request");
var port = 3000;

app.set("view engine", "ejs");

// Routes
app.get("/", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  var query = req.query.search;
  var url = "http://omdbapi.com/?apikey=thewdb&s=" + query;

  request(url, function(error, response, body) {
    var data = JSON.parse(body);

    if (!error && response.statusCode == 200) {
      res.render("results", {
        data: data
      });
    }
  });
});

app.listen(port, function() {
  console.log("Movie app started on port: " + port);
});
