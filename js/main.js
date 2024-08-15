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
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const tabs2 = document.querySelectorAll('[data-tab-targets]')
const tabContents2 = document.querySelectorAll('[data-tab-contents]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

tabs2.forEach(tab2 => {
  tab2.addEventListener('click', () => {
    const target = document.querySelector(tab2.dataset.tabTarget)
    tabContents2.forEach(tabContent2 => {
      tabContent2.classList.remove('active')
    })
    tabs2.forEach(tab2 => {
      tab2.classList.remove('active')
    })
    tab2.classList.add('active')
    target.classList.add('active')
  })
})
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


var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

$('#a li').click(function(){
  var img = $(this).find('img').attr("src");
  var value = $(this).find('img').attr('value');
  var text = this.innerText;
  var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
}
