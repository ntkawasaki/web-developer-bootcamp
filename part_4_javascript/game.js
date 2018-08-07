// Create secret number
var secretNumber = 4;

// Ask user for guess
var stringGuess = prompt("What is your guess? ");
var guess = Number(stringGuess);

// Check guess
if (guess === secretNumber) {
    alert("You got it right");
}
else if (guess > secretNumber) {
    alert("Too High");
}
else {
    alert("Too Low");
}
