var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

init();


function init() {
  setUpMode();
  setUpSquares();
  reset();
}


function setUpMode() {
  // Mode event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      // Remove selected class from both, then add to the selected one
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      // Ternary operator
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

      reset();
    })
  }
}


function setUpSquares() {
  // Set up board
  for (var i = 0; i < squares.length; i++) {
    console.log("Board Set Up")

    // Add click listeners
    squares[i].addEventListener("click", function() {
      console.log("Square Clicked")

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
}


// Reset Game
function reset() {
  console.log("Reset");

  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


// Reset Button functionality
resetButton.addEventListener("click", function() {
  reset();
})


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
