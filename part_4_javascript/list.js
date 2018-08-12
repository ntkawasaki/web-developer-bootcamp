window.setTimeout(function() {

  var todos = ["buy new turtle"];
  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    }
    else if (input === "new") {
      addTodo();
    }
    else if (input === "delete") {
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }
  console.log("Okay, you quit")


  function listTodos() {
    console.log("*********");
    todos.forEach(function(el, i) {
      console.log(i + ": " + el);
    })
    console.log("*********")
  }

  function addTodo() {
    var new_input = prompt("Enter new todo: ");
    todos.push(new_input);
    console.log("Todo added");
  }

  function deleteTodo() {
    var index = prompt("What is the index of the item you want to delete?");
    todos.splice(index, 1);
    console.log("Todo deleted");
  }

}, 500);
