$(document).ready(function(){
    $('#brand .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });

      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 2
          }
        }
      });

    
})

