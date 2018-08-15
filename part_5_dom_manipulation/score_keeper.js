var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.getElementById("scoreLimit")
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 5;


// p1Button.addEventListener("click", function() {
//   if (!gameOver) {
//     p1Score++;
//     if (p1Score === winningScore) {
//       console.log("Game Over")
//       p1Display.classList.add("winner");
//       gameOver = true;
//     }
//   }
//   console.log("Player One: " + p1Score);
//   p1Display.textContent = p1Score;
// });
//
//
// p2Button.addEventListener("click", function() {
//   if (!gameOver) {
//     p2Score++;
//     if (p2Score === winningScore) {
//       console.log("Game Over")
//       p2Display.classList.add("winner");
//       gameOver = true;
//     }
//   }
//   console.log("Player Two: " + p2Score);
//   p2Display.textContent = p2Score;
// });

p1Button.addEventListener("click", updateScore(p1Score, p1Display));
p2Button.addEventListener("click", updateScore(p2Score, p2Display));

function updateScore(score, display) {
  if (!gameOver) {
    score++;
    if (score === winningScore) {
      console.log("Game Over")
      display.classList.add("winner");
      gameOver = true;
    }
  }
  console.log("Player Score: " + score);
  display.textContent = score;
};


resetButton.addEventListener("click", function() {
  reset();
});


numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = parseInt(this.value);
  console.log("Score Limit Changed");
  reset();
});


// Reset game
function reset() {
  console.log("RESET CLICKED");
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
};
