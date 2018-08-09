var friends = ["Charlie", "Liz", "Matt", "Graham"];
console.log(friends[0]);

// push() Add to end and return length
var x = friends.push("Robi");
console.log(x);

// pop() Remove from end and return item
var y = friends.pop();
console.log(y);

// unshift() Add to beginning and return length
var z = friends.unshift("Mario");
console.log(z);

// shift() Remove from beginning and return item
var w = friends.shift();
console.log(w);

// indexOf()
console.log(friends.indexOf("Liz"));

// shift()
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(0, 3);
console.log(citrus);

// Doesn't change original array
var fruits2 = fruits.slice();
fruits2[0] = "YOLO";
console.log(fruits);
console.log(fruits2);
