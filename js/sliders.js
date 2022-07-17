// const portSlider = document.querySelector('.portfolio-section__items');

// const portfolioSlider = new Swiper(portSlider, {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     on: {
//         init: function () {
//             console.log('swiper initialized');

//             const activeSlide = portSlider.querySelector('.swiper-slide-active')

//             const nextActiveSlide = activeSlide.nextElementSibling;

//             const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//             activeSlide.classList.add('slider-visible');
//             nextActiveSlide.classList.add('slider-visible');
//             nextNextActiveSlide.classList.add('slider-visible');
//         },
//     },
//     navigation: {
//         nextEl: '.portfolio-section__next',
//         prevEl: '.portfolio-section__prev',
//     },
// });

// portfolioSlider.on('slideChange', function () {
//     console.log('slide changed');

//     console.log(portfolioSlider.realIndex);

//     const activeSlide = portSlider.querySelector('.swiper-slide-next')

//     const nextActiveSlide = activeSlide.nextElementSibling;

//     const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//     document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
//         el.classList.remove('slider-visible');
//     });

//     activeSlide.classList.add('slider-visible');
//     nextActiveSlide.classList.add('slider-visible');
//     nextNextActiveSlide.classList.add('slider-visible');
// });

const testimonialsSlider = new Swiper('.testimonials__items', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },
});
const portSlider = new Swiper('.portfolio-section__items', {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
    },
});