$( document ).ready(function() {
    console.log("javascript file has loaded");
    $(".quoteButton").click(function(){
      quoteGeneration();
    });
});



function quoteGeneration() {
      console.log("onClick has fired");
      $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
        $("#quoteReturn").append(a[0].content + "<p>— " + a[0].title + "</p>")
      });
}
