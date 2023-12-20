$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        loop: true,
        margin: 30,
        dots: false,
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

document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    console.log(event.target)
  });