$('.benner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    dots:true,
    autoplay:false,
    autoplayHoverPause:true,
})
document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "nav#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "dark",
                       "navbars": [
                          {
                             "position": "top",
                             "content": [
                                "searchfield"
                             ]
                          }
                       ]
                    });
                }
            );