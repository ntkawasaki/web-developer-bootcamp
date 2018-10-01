var express = require("express");
var app = express();
var bodyParser = require("body-parser")
const port = 3000;

var campgrounds = [{
    name: "Salmon Creak",
    image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014429df2c47caeedb3_340.jpg"
  },
  {
    name: "Granite Hill",
    image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f8c37ca2e4b5be_340.jpg"
  },
  {
    name: "Big Basin",
    image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f8c37ca2e4b5be_340.jpg"
  }
];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}))


// GET Route for landing page
app.get("/", (req, res) => {
  res.render("landing");
})


// GET Route for getting campgrounds
app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", {
    campgrounds: campgrounds
  });
})


// POST Route for submitting new campgrounds
app.post("/campgrounds", (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {
    name: name,
    image: image
  };

  campgrounds.push(newCampground);

  // Redirect as GET 
  res.redirect("/campgrounds")
})


// Route for campgrounds form
app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
})



app.listen(port, () => {
  console.log("Yelpcamp server started on port: " + port);
})
