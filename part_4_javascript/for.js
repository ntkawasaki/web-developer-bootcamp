// 1.
console.log("Print all numbers between -10 and 19")

for (var i = -10; i <= 19; i++) {
  console.log(i);
}

// 2.
console.log("\nPrint all even numbers between 10 and 40")

for (var i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3.
console.log("\nPrint all odd numbers between 300 and 333\n")

for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 4.
console.log("\nPrint all numbers divisible by 5 and 3 between 5 and 50")

for (var i = 5; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
