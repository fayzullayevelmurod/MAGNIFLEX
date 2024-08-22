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

// bestsellersSwiper
var swiper3 = new Swiper(".bestsellersSwiper", {
  spaceBetween: 40,
  navigation: {
    nextEl: ".bestsellers-button-next",
    prevEl: ".bestsellers-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 2.60,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 2.60,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2.60,
      spaceBetween: 40,
    },
    0: {
      slidesPerView: 1.50,
      spaceBetween: 40,
    },
  },
});
// bestsellersSwiper

// comfortableSwiper
var swiper3 = new Swiper(".comfortableSwiper", {
  spaceBetween: 40,
  navigation: {
    nextEl: ".comfortable-button-next",
    prevEl: ".comfortable-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 3.50,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 3.60,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2.60,
      spaceBetween: 40,
    },
    0: {
      slidesPerView: 1.50,
      spaceBetween: 40,
    },
  },
});
// comfortableSwiper

// materialsSwiper
var swiper3 = new Swiper(".materialsSwiper", {
  spaceBetween: 40,
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});
// materialsSwiper

// descriptionSwiper
var swiper3 = new Swiper(".descriptionSwiper", {
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      initialSlide: 1,
      centeredSlides: true,
      slidesPerView: 1.30,
      spaceBetween: 20,
    },
  },
});
// descriptionSwiper

// select
let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})
// select

// tab
const tabs_in = document.querySelectorAll('.tabs_in')

if (tabs_in.length) {
  tabs_in.forEach(item => {
    let tabBtn = item.querySelectorAll('.tabs li');
    let tabContent = item.querySelectorAll('.content_item');

    tabBtn.forEach((btn,index) => {
      btn.onclick = () => {
        tabContent.forEach((content,id) => {
          if (id == index) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        })
        tabBtn.forEach(i => {
          if (i == btn) {
            i.classList.add('active')
          } else {
            i.classList.remove('active')
          }
        })
      }
    })
  })
}

// tab

var swiper7 = new Swiper(".product_cardSwiper", {
  loop: true,
  spaceBetween: 4,
  slidesPerView: 4,
  direction: 'vertical',
  mousewheel: true,
  breakpoints: {
    0: {
      spaceBetween: 4,
    },
    993: {
      spaceBetween: 10,
    },
    1440: {
      spaceBetween: 10,
    }
  }
});

var swiper8 = new Swiper(".product_cardSwiper2", {
  loop: true,
  effect: "fade",
  allowTouchMove: false,
  thumbs: {
    swiper: swiper7,
  },
});
