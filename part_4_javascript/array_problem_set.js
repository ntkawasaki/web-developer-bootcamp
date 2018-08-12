// 1.
function printReverse(arr) {
  arr.reverse().forEach(function(el) {
    console.log(el);
  })
}

var list = [1,2,3,4];
var alpha = ["A", "B", "C"]
printReverse(list);
printReverse(alpha);


// 2.
function isUniform(arr) {
  let num = new Set(arr).size;
  return num === 1;
}

isUniform(list);
isUniform(["a", "a", "a"]);


// 3.
function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(num) {
    sum += num;
  })
  return sum
}

sumArray(list);


// 4.
function max(arr) {
  var highest = arr[0];
  arr.forEach(function(el) {
    if (el > highest) {
      highest = el;
    }
  })
  return highest
}

max(list);
max([-1000, 3, 43, 12,500]);
