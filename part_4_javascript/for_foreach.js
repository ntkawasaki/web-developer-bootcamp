// forEach
var colors = ["red", "orange", "yellow", "green"]

colors.forEach(function(color) {
  console.log(color);
})

// Alternate syntax
function printColor(color) {
  console.log(color)
}

colors.forEach(printColor)

// While loop version
var i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}
