var express = require("express");
var app = express();
const port = 3000;

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("landing");
})

app.get("/campgrounds", (req, res) => {
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

  res.render("campgrounds", {
    campgrounds: campgrounds
  });
})

app.listen(port, () => {
  console.log("Yelpcamp server started on port: " + port);
})
