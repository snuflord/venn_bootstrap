
$(document).ready(function(){
    $('.logos-responsive').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
      });

        var jobsPrevArrow = $('.prevJob');
        var jobsNextArrow = $('.nextJob');
      $('.jobs-responsive').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        prevArrow: jobsPrevArrow,
        nextArrow: jobsNextArrow,
        variableWidth: true,
      });
})

const navbar = document.querySelector('.navbar-scroll');
window.onscroll = () => {
    if (window.scrollY >= 300) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
};

