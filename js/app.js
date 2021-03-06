$(function () {
  'use:static';

// start loading page
var pLoad = $('#loading p').text('pleas wait page loading' + ' . .');
$(document).ready(function () {
  $("#loading").css('display' , 'none');
});
// end loading page

// start dorpdown menu with hover
$('.navbar .dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});
// end dropdown menu without click

// start page up button
$('#footer .up a').on('click' , function() {
  $('html , body').animate({
    scrollTop: $('#top-nav').offset().top
  } , 1000);
});
// end page up button

// dir section
var pageName = $('#dir .left p').text();
$('#dir .right p').text('Home' + ' / '  + pageName);
// end dir section

// start about page

// slide about
$(".owl-carousel").owlCarousel({
 loop:true,
 margin:0,
 nav:true,
 dots:false,
 responsive:{
     0:{
         items:1
     },
     600:{
         items:1
     },
     1000:{
         items:1
     }
 }
});
// end slide about

// end about bage

// start services page
var icon = $('#video .icon');
var over = $('#video .over-img');

over.mouseover(function () {
  $(this).css({
    'opacity' : '0.5'
  });
  icon.css({
    'transform': 'scale(1.2)'
  });
});

icon.mouseover(function () {
  over.css({
    'opacity' : '0.5'
  });
  icon.css({
    'transform': 'scale(1.2)'
  });
});

over.mouseleave(function () {
  $(this).css({
    'opacity' : '0.1'
  });
  icon.css({
    'transform': 'scale(1)'
  });
});
// end services page


});
