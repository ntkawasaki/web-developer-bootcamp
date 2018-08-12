var comments = {
  data: ["Good job!", "Bye", "Lame..."],
  print: function() {
    this.data.forEach(function(el) {
      console.log(el);
    })
  },
  
};


console.log(comments);
comments.print();
