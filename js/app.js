$(document).ready(function(){
    //hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText : ['PREV','NEXT'],
        responsive:{
            0:{
              nav: false,
            },
            768:{
                nav: true,
            }
        }
    })
});
$(document).ready(function(){
    //project slide
    $('#project-slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        responsive:{
            0:{
                items:1,
                nav: false,
                margin:0,
              },
            768:{
                  items:2,
              },
            1140: {
                items: 2,
                center: true,
                nav: false,
                dots: true,
              }
        }
    })
});

$('#Reviews-slider').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots: true,
  items: 1,
  smartSpeed: 500,
});


