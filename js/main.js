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

var swiper = new Swiper(".homeSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
