// Handles showing the hamburger menu to access the nav bar on a smaller screen
$(document).ready(function(){
    $('.ham-menu').on('click', function() {
        $('.nav').toggleClass('show-ham-menu');
        $('.nav ul').toggleClass('show-ham-menu');

    });
});

// Handles the carousel
$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    function subscribe() {
        alert("Welcome! You have successfully subscribed");
    }
    
    // Call function on click of the subscribe button
    window.onload = function(){ 
    
    document.getElementById("send-msg-btn").onclick = subscribe;
    };


//   });
              