
$(document).ready(function(){
  $('.video-active').owlCarousel({
   
      dots:true,
      nav:true,
       merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
      
     navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
      responsive:{
          0:{
              items:1

          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    })
  });
