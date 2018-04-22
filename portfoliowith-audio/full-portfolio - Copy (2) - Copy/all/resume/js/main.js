// preloader set up


var overlay = document.getElementById("overlay");

window.addEventListener("load", function(){
  overlay.style.display = "none";
});

$(document).ready(function(){
  setTimeout(function(){
    $("body").addClass("loader");
  }, 1500);
})

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.skills');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(205, 255, 250, 0.3)');
          $(".navbar-brand").css('font-family', 'Lobster, cursive');
       } else {
          $(".navbar").css('background-color', 'transparent', 'color', 'white');
           $(".navbar-brand").css('font-family', 'Open Sans, sans-serif');
       }
   });
    }
});