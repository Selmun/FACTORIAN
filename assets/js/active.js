
(function ($) {
    "use strict";

        jQuery(document).ready(function ($){
        $ (".homepage-slide").owlCarousel({
            items:1,
            nav: true,
            loop: true,
            dots:false,
            autoplay:false,
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag:false,
            touchDrag:false,
        });

        $(".homepage-slide").on("translate.owl.carousel", function(){
            $(".single-slide-item h2").removeClass("animated fadeInUp").css("opacity", "0");
        });

        $(".homepage-slide").on("translated.owl.carousel", function(){
            $(".single-slide-item h2").addClass("animated fadeInUp").css("opacity", "1");
        });




        $(".gallery-lightbox").magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            },
            zoom:{
                enabled:true
            }
        });

 

        new WOW().init();

        jQuery(".factorian-slider-preloder-wrapper").fadeOut(500);
        jQuery(".site-preloader-wrapper").fadeOut(500);


         $(".main-menu").slicknav({
            prependTo: ".responsive-menu-wrapper"
        });  


        $('.image-link').magnificPopup({type:'image'});
        
    });

 

    jQuery(window).load(function(){
        jQuery(".factorian-slider-preloder-wrapper, .site-preloader-wrapper").fadeOut(5000);
    });

    

}(jQuery));

