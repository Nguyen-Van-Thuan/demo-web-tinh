$(document).ready(function(){
  // Banner
  $('.banner-owl').owlCarousel({
      loop:true, //Vong lap cac item
      margin:10, //khoan cach giua cac item
      nav:false, //Navigation
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive:{
          0:{
              items:1
          },
          300: {
            items: 1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
  // Limit Time Offers
  $('.limit-time-owl').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      }
  })

  });