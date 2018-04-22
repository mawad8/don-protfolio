// external js: isotope.pkgd.js

// init Isotope

// portfolio sec
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  // bb: function() {
  //   var number = $(this).find('.number').text();
  //   return name.match( /car$/);
  // },
  // show if name ends with -ium
  
  all: function() {
    var name = $(this).find('.name').text();
    return name.match( /food$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// ---------------------------
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



// navbar section
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#wrapper');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#151414');
          $(".navbar-brand").css('color', ' #B72701');
       } else {
          $(".navbar").css('background-color', 'transparent', 'color', 'white');
           $(".navbar-brand").css('color', ' white');
       }
   });
    }
});


// nav for each part
$(document).ready(function(){
  var scrol = 0;
  var starch = $('#abot');
  var offset = starch.offset();
  if(starch.length){
    $(document).scroll(function(){

    scrol = $(this).scrollTop();
    // scrol = $(this).scrollDown();
    if(scrol > offset.top){
      $(".a").css('color', 'red');
    }else{
      $(".a").css('color', 'white');
    }
    });
  }
});
// cancel
  $(document).ready(function(){
  var scroli = 0;
  var starchg = $('#sk');
  var offset = starchg.offset();
  if(starchg.length){
    $(document).scroll(function(){

    scroli = $(this).scrollTop();
    // scrol = $(this).scrollDown();
    if(scroli > offset.top){
      $(".e").css('color', 'red');
      $(".a").css('color', 'white')
    }else{
      $(".e").css('color', 'white');
    }
    });
  }
});
  // cancle
   $(document).ready(function(){
  var scroli = 0;
  var starchg = $('#H1');
  var offset = starchg.offset();
  if(starchg.length){
    $(document).scroll(function(){

    scroli = $(this).scrollTop();
    // scrol = $(this).scrollDown();
    if(scroli > offset.top){
      $(".c").css('color', 'red');
      $(".b").css('color', 'white');
      $(".a").css('color', 'white');
      $(".e").css('color', 'white');
    }else{
      $(".c").css('color', 'white');
    }
    });
  }
});
    $(document).ready(function(){
  var scroli = 0;
  var starchg = $('#findme');
  var offset = starchg.offset();
  if(starchg.length){
    $(document).scroll(function(){

    scroli = $(this).scrollTop();
    // scrol = $(this).scrollDown();
    if(scroli > offset.top){
      $(".b").css('color', 'red');
      $(".c").css('color', 'white');
      $(".a").css('color', 'white');
      $(".e").css('color', 'white');
    }else{
      $(".b").css('color', 'white');
    }
    });
  }
});

   // cancle
    $(document).ready(function(){
  var scroli = 0;
  var starchg = $('#join');
  var offset = starchg.offset();
  if(starchg.length){
    $(document).scroll(function(){

    scroli = $(this).scrollTop();
    // scrol = $(this).scrollDown();
    if(scroli > offset.top){
      $(".d").css('color', 'red');
      $(".a").css('color', 'white');
      $(".b").css('color', 'white');
      $(".c").css('color', 'white');

    }else{
      $(".d").css('color', 'white');
    }
    });
  }
});

// map section
function initMap(){
  let mymape = document.getElementById('mymaps');
  let myMap = new google.maps.Map( mymape, {
    center: {
      lat: 37.8272,
      lng: -122.2913

    },
    zoom: 12,
    mapTypeId: "roadmap"
  });
  let myhome = new google.maps.Marker({
    position: {
      lat: 37.7889,
      lng: -122.3981

    },
    map: myMap,
    title: "My School"
  });
}
// $('.navbar-nav li a').bind('click', function(event) {
//     $('.navbar-nav li').removeClass('active');
//     $(this).closest('li').addClass('active');
//     var $anchor = $(this);
//     var nav = $($anchor.attr('href'));
//     if (nav.length) {
//       $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');

//       event.preventDefault();
//     }
//   });
//    $('.bxslider').bxSlider({
//     adaptiveHeight: true,
//     mode: 'fade'
//   });

// })(jQuery);

//  $(window).scroll(function() {
//     if ($(".navbar-default").offset().top > 50) {
//       $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//       $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
//   });

 $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  