//scripts.js

$(function(){
      $(".quotations-carousel").owlCarousel({
      items:1,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true,
      dots:false,
   });
   $('.cover-carousel').owlCarousel(
    {
        items:1,
        autoplay: true,
        loop:true
    }); 
   
   $('.gallery-content').owlCarousel({
      items:1,
      dots:false
      
      
   });
   
   $('.browser-carousel').owlCarousel({
        items:5,
       dots:false      
    }); 
   
      $(".testimonials-carousel").owlCarousel({
      items:2,
      autoplay:false,
      smartSpeed:700,
      loop:false,
      autoplayHoverPause:true,
      dots:true,
   });
   
//    $('#gallery').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         gallery:{ enabled:true },
//         mainClass: 'mfp-with-zoom',
        
//         zoom:{
//             enabled: true,
            
//             duration: 300,
//             easing: 'ease-in-out',
            
//             opener: function(openerElement){
//                 return openerElement.is('img') ? openerElement : openerElement.find('img');
//             }
//         }
        
//     });
    //    $(window).scroll(function(){
    //     if($(this).scrollTop() > 100){
    //         $("nav").addClass("wg-top-nav");
    //         $(".smooth-scroll").css("color","black");
    //         $(".navbar-brand img").attr("src","images/logo-2.png");
    //         $(".navbar-header").css("height","100px")
    //         $(".btn-back-to-top").fadeIn();
            
    //     }
    //     else{
    //          $("nav").removeClass("wg-top-nav");
    //             $(".smooth-scroll").css("color","white");
    //          $(".navbar-brand img").attr("src","images/logo-small.png");
    //          $(".btn-back-to-top").fadeOut();
    //     }
    //    });
    // $("a.smooth-scroll").click(function(event){
    //     //Prevents to perform the default operation
    //     event.preventDefault();
        
    //     var section = $(this).attr("href");
    //     $("html, body").animate({
    //         scrollTop: $(section).offset().top - 69,
    //     }, 1250, "easeInOutExpo");
    // });
    $(window).scroll(function(){
        //window.alert('hello');
        if($(this).scrollTop()>100){
            $("nav").addClass("wg-top-nav");
            $(".btn-back-to-top").fadeIn();
        }
        else{
            $("nav").removeClass("wg-top-nav");
            $(".btn-back-to-top").fadeOut();
        }
    });
    
    $("a.smooth-scroll").click(function(event){
        //prevents to perform the default operation
        //event.preventDefault();
        
        var section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 69,
        },1250, "easeInOutExpo");
    });
    

});