var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cat_app", {
  useNewUrlParser: true
});


// Define catSchema
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
})


// Makes a collection
var Cat = mongoose.model("Cat", catSchema);


// // Make new cat 
// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 4,
//   temperament: "nice"
// });


//// Add cat to database
// george.save((err, cat) => {
//   if (err) {
//     console.log("Something went wrong");
//   } else {
//     console.log("Cat saved")
//     console.log(cat);
//   }
// })


// Make new cat AND save at same time
Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "angry"
}, (err, cat) => {
  if (err) {
    console.log("Error:");
    console.log(err);
  } else {
    console.log("Cats:");
    console.log(cat);
  }
});


// Retrieve cats from database
Cat.find({}, (err, cats) => {
  if (err) {
    console.log("Error:");
    console.log(err);
  } else {
    console.log("Cats:");
    console.log(cats);
  }
});
