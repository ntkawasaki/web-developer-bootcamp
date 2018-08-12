var dog = {
  name: "Bane",
  breed: "Pug",
  age: 3
}

dog.age += 10;
dog["breed"] = "Super pug"


var posts = [
  {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["awesome post", "terrible post"]
  },
  {
    title: "Cats are actually alright",
    author: "Noah",
    comments: ["coool", "<3"]
  }
]

console.log(posts[0]["title"])
console.log(posts[1].author)
console.log(posts[1].comments[1])
console.log(posts[1]["comments"][0])

var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

console.log(someObject.friends[0].name)
