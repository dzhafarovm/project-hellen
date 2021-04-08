$(function () {
 
  $('.slider').slick({
    dots: true,
    // fade: true
    slidesToShow: 1,
    speed: 600,
    // initialSlide: 5,
    adaptiveHeight: true,
    asNavFor:".slidersmall",
    
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //     dots: false
    //     }
    // }
    // ]
  });

  $('.slidersmall').slick({
  //   autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeigth: true,
    // speed: 600,
    asNavFor:".slider"

    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //     dots: false
    //     }
    // }
    // ]
    
  });
  
})



