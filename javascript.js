/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
  // console.log("javascript file has loaded");
  $(".quoteButton").click(function() {
    quoteGeneration();
  });
});

// Using the following API to access Game of Thrones Quotes.
// https://github.com/wsizoo/game-of-thrones-quotes


function quoteGeneration() {
  $.getJSON("https://got-quotes.herokuapp.com/quotes", function(a) {
    $("#quoteReturn").html('"' + a.quote + '"');
    $("#characterReturn").html('<h3><b>-' + a.character + '</b></h3>');
  });
}
