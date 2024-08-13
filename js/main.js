// catalog
let catalog_btn = document.querySelector('.catalog_btn');
let catalog = document.querySelector('.catalog');

catalog_btn.addEventListener('click', () => {
  catalog.classList.toggle('active');
})
// catalog

// media_menu
let burger_icon = document.querySelector('.burger_icon');
let media_menu = document.querySelector('.media_menu');

burger_icon.addEventListener('click', () => {
  media_menu.classList.toggle('active');
})
// media_menu

// home_slider
let swiper = new Swiper(".homeSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
// home_slider

// office_slider
let swiper2 = new Swiper(".officeSwiper", {
  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 2,
    },
  },
});
// office_slider

// youtube
var swiper3 = new Swiper(".youtubeSwiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".youtube-button-next",
    prevEl: ".youtube-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

// youtube
