var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
colorDisplay.textContent = pickedColor;


// Easy mode
easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");

  numSquares = 3;
  colors = generateRandomColors(numSquares);
  console.log("Easy mode colors: %s", colors.length)
  pickedColor = pickColor();
  console.log("Easy mode pickedColor: %s", pickedColor)
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})


// Hard mode
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")

  numSquares = 6
  colors = generateRandomColors(numSquares);
  console.log("Hard mode colors: %s", colors.length)
  pickedColor = pickColor();
  console.log("Hard mode pickedColor: %s", pickedColor)
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
  }
})


// Reset Button functionality
resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    // Add initial colors
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
})


// Set up board
for (var i = 0; i < squares.length; i++) {
  // Add initial colors
  squares[i].style.backgroundColor = colors[i];

  // Add click listeners
  squares[i].addEventListener("click", function() {
    // Grab clicked color
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  })
}


// Change color to match passed color
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  h1.style.background = color;
}


// Pick one of the colors to be the correct color
function pickColor() {
  var num = Math.floor(Math.random() * colors.length);
  return colors[num];
}


// Create array of random colors
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}


// Make randomColor with three values 0-255
function randomColor() {
  var temp = [];
  for (var i = 0; i < 3; i++) {
    temp[i] = Math.floor(Math.random() * 256);
  }
  return "rgb(" + temp[0] + ", " + temp[1] + ", " + temp[2] + ")";
}
