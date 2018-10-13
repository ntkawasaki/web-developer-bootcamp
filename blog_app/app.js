//// IMPORTS ////
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose")
const port = 3000;


//// CONFIGURATIONS ////
mongoose.connect("mongodb://localhost:27017/blog_app", {
  useNewUrlParser: true
});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));


//// DATABASE ////
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
})

var Blog = mongoose.model("Blog", blogSchema)

// Blog.create({
//   title: "Test Blog",
//   image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e2448175103d36c873e2511d112d339&auto=format&fit=crop&w=1050&q=80",
//   body: "Hello this is a blog post!!!",
// });


//// RESTFUL ROUTES ////
// INDEX
app.get("/blogs", (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log(err)
    } else {
      res.render("index", {
        blogs: blogs
      })
    }
  })
})

// NEW
app.get("/blogs/new", (req, res) => {
  res.render("new");
})

// CREATE
app.post("/blogs", (req, res) => {
  Blog.create(req.body.blog, (err, newBlog) => {
    if (err) {
      console.log(err)
      res.render("new")
    } else {
      res.redirect("/blogs")
    }
  })
})











// LISTEN
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
