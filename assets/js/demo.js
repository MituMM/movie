
$(document).ready(function(){
  $('.video-active').owlCarousel({
    loop:true,
      merge:true,
    dots:true,
    nav:true,
    video:true,
    lazyLoad:true,
       center:true,
  navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
    responsive:{
        0:{
            items:1

        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
  });
