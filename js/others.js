$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1500: {
                items: 3
            }
        }
    });
});
