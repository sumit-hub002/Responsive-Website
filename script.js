

// Swiper Initi..
const swiper  = new  Swiper('.swiper', {
  // Optional parameters
  loop: true,
  pagination:{
    el: '.swiper-pagination',
  },

  // Navigation Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    
    // Scroll
     scrollbar: {
      el: '.swiper-scrollbar',
      },


    }); 




// Menubar Responsive
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});






// Swiper for Testimonials

const testimonialSwiper = new Swiper ('.testimonial-slider', {
  slidesPerView: 1,
  spaceBetween : 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction:  false,

    },

    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints:{
      640:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
      },
    }
});


// AOS Animation
AOS.init({
  duration:1000,
  once:true,

});


let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const carousel = document.getElementById('testimonialCarousel');
const colors = ['bg-green-200', 'bg-blue-200', 'bg-red-200', 'bg-pink-200', 'bg-purple-200' ];


function changeTestimonial(direction){
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');


}









