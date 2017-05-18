$( document ).ready(function() {
    console.log("javascript file has loaded");
    $(".quoteButton").click(function(){
      quoteGeneration();
    });
});

// Using the following API to access Game of Thrones Quotes.
// https://github.com/wsizoo/game-of-thrones-quotes


function quoteGeneration() {
      console.log("onClick has fired");
      $.getJSON("https://got-quotes.herokuapp.com/quotes", function(a) {

       console.log(a['quote']);
       console.log(a['character']);

        $("#quoteReturn").html(a['quote']);
        $("#characterReturn").html(a['character']);
      });
}
