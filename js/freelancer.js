/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Add & remove Slide In CSS3 animations for modal
$('.modal').on('shown.bs.modal', function() {
  $(this).removeClass('animated fadeInLeftBig');
  $(this).addClass('animated fadeInRightBig');

  // Start carousel
  $(this).find('.carousel').carousel();
});
$('.modal').on('hide.bs.modal', function(e) {
  $(this).removeClass('animated fadeInRightBig');
  $(this).addClass('animated fadeInLeftBig');
  setTimeout(2000);
});

/**
 * Show modal via url
 */
 var hash = window.location.hash;
 if( hash ) {
   $( hash ).modal('show');
 }

/**
 *  Project traversing (next and prev)
 */

// When modal opens, assign project as current.
jQuery( document ).ready(function( $ ) {
  if ( hash ) {
    console.log('a'+hash);
    $('body').find('a'+hash+'-link').addClass('current');
  }

  $('.portfolio-link').on('click', function() {
    $(this).addClass('current');
  });

  // Smooth Scroll
  var hashTagActive = "";
  $(".smooth-anchor-scroll").click(function (event) {
    if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
      event.preventDefault();
      //calculate destination place
      var dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
          dest = $(document).height() - $(window).height();
      } else {
          dest = $(this.hash).offset().top;
      }
      //go to destination
      $('html,body').animate({
          scrollTop: dest
      }, 1200, 'swing');
      hashTagActive = this.hash;
  }
  });

}); // jQuery

// When prev or next is clicked, close current modal...
$('.next-project').on('click',function() {
  $('.modal').modal('hide');
  $('body').find('a.portfolio-link.current').removeClass('current').parent().next().children().addClass('current');
  $('body').find('a.portfolio-link.current').click();
});

$('.prev-project').on('click',function() {
  $('.modal').modal('hide');
  $('body').find('a.portfolio-link.current').removeClass('current').parent().prev().children().addClass('current');
  $('body').find('a.portfolio-link.current').click();
});


// Move current attribute
// Open current modal attribute

/**
 * Add play button feature to modals
 */
// $('.play-video').each(function(){
//   var carouselID = $(this).attr('href');
//   $( carouselID ).find('iframe').click().addClass('asdf');
// });
