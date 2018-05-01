
$(document).ready(function(){
  $('.slider-active').owlCarousel({
      loop:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:2000,
    navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
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
  })


  $('.main_slider_active').owlCarousel({
      loop:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:2000,
    navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
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
  })
  });
