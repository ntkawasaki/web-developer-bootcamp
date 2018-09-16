// // Select all divs and give them purple background
console.log("background changes to purple");
// $("div").css("background", "purple")

var divs = document.querySelectorAll("div");
for (var i = 0; i < divs.length; i++) {
  divs[i].style.background = "purple";
}

// Select the divs with class "highlight" and make them 200px wide
console.log(".highlight changed to 200px wide");
// $(".highlight").css("width", "200px")

var highlights = document.getElementsByClassName("highlight");
for (var i = 0; i < highlights.length; i++) {
  highlights[i].style.width = "200px";
}

// Select divs with id "third" and give orange border
console.log("Change third to orange border");
// $("#third").css("border", "2px solid orange")

var third = document.querySelector("#third");
third.style.border = "2px solid orange";

// Select first div and change font color to pink
console.log("Change first div font color to pink");
// $("div:first-of-type").css("color", "pink")

var firstDiv = document.querySelector("div:first-of-type");
firstDiv.style.color = "pink";
