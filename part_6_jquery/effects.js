console.log("Connected")

// $("button").on("click", function() {
//   $("div").fadeToggle(1000, function() {
//     // $(this).remove();
//   });
// })


$("button").on("click", function() {
  $("div").slideToggle(1000, function() {
    $(this).remove();
    console.log("Slide done");
  });
})
