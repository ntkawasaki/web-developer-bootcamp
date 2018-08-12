var movies = [
  {
    title: "Mad Max",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Star Wars",
    rating: 4,
    hasWatched: false
  },
  {
    title: "Avatar",
    rating: 3,
    hasWatched: true
  }
]


function buildString(movie) {
    var watched = "You have ";
    if (movie.hasWatched) {
      watched += "watched";
    }
    else {
      watched += "not seen"
    }
    watched += " \"" + movie.title + "\" - " + movie.rating + " stars.";
    return watched;
}


movies.forEach(function(i) {
  console.log(buildString(i));
})
