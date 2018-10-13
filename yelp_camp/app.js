var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

const port = 3000;


// DATABASE
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true
});

// SCHEMA SET UP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create({
  name: "Last Campground",
  image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f8c97baeeeb7b9_340.jpg",
  description: "This is a beautiful campground in California"
}, (err, campground) => {
  if (err) {
    console.log(err);
  } else {
    console.log("New campground added");
    console.log(campground);
  }
});



// SET UP
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));


// GET Route for landing page
app.get("/", (req, res) => {
  res.render("landing");
});


// INDEX -  Show all campgrounds
app.get("/campgrounds", (req, res) => {

  // Get all campgrounds from db
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {
        campgrounds: allCampgrounds
      });
      console.log()
    }
  });
});


// CREATE -  Add new campground to database
app.post("/campgrounds", (req, res) => {

  // Get data from form and save in variables
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {
    name: name,
    image: image,
    description: desc
  };

  // Create new campground and save to database
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/campgrounds")
    }
  })
});


// NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs");
});


// SHOW - More details per campground. Careful, above route ^ must come before or this will match that route
app.get("/campgrounds/:id", (req, res) => {

  // Find campground with id
  var id = req.params.id;
  Campground.findById(id, (err, foundCampground) => {
    if (err) {
      console.log(err)
    } else {
      res.render("show", {
        campground: foundCampground
      });
    }
  });
});







app.listen(port, () => {
  console.log("Yelpcamp server started on port: " + port);
});
