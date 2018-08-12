var obj = {
  name: "Chuck",
  age: 45,
  isCool: true,
  friends: ["bob", "tina"],
  add: function(x, y) {
    return x + y;
  }
}

var answer = obj.add(6, 10);
console.log(answer);

var dogSpace = {
  type: "dog"
};
dogSpace.speak = function() {
  console.log("WOOF")
}

var catSpace = {
  type: "cat"
};
catSpace.speak = function() {
  console.log("MEOW")
}

dogSpace.speak();
catSpace.speak();
console.log(dogSpace);
