var answer = prompt("Are we there yet? ");

while (answer.indexOf("yes") === -1) {
    alert("No")
    var answer = prompt("Are we there yet? ");
}

alert("Yay were there.")
