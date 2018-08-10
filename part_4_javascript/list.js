var todos = ["buy new turtle"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log(todos)
  }
  else if (input === "new") {
    var new_input = prompt("Enter new todo: ")
    todos.push(new_input)
  }
  input = prompt("What would you like to do?");
}

console.log("Okay, you quit")
