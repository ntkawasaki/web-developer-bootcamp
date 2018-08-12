function myForEach(arr, func) {
  for (var i=0; i<arr.length; i++) {
    func(arr[i]);
  }
}

var colors = ["red", "orange", "yellow"];
myForEach(colors, console.log);

myForEach(colors, function(color) {
  console.log("hi " + color);
})

Array.prototype.myForEach2 = function(func) {
  for (var i=0; i<this.length; i++) {
    func(this[i]);
  }
}

var woo = ["woo", "wooo", "woooo"];
woo.myForEach2(console.log);
