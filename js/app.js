/* #Header
  ======================================================= */

// Top Slider
if (document.querySelector('.header .top .swiper')) {
  new Swiper(".header .top .swiper", {
    navigation: {
      nextEl: ".header .top .next",
      prevEl: ".header .top .prev",
    },
  });
}

// Color Change
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !header.classList.contains('inverted')) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
});

if (window.scrollY > 0) {
  header.classList.add('header-white');
} else {
  header.classList.remove('header-white');
}

/* #Banner
  ======================================================= */

// Slider
if (document.querySelector('.banner .swiper')) {
  new Swiper(".banner .swiper", {
    pagination: {
      el: ".banner .swiper-pagination",
    },
  });
}

/* #Home Features
  ======================================================= */

// Slider
if (document.querySelector('.home-features .swiper')) {
  new Swiper(".home-features .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2,
        loop: true,
      },
      1024: {
        slidesPerView: 4,
        loop: false,
      }
    },
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

/* #Large Products Slider
  ======================================================= */

// Slider
if (document.querySelector('.large-products-slider .swiper')) {
  new Swiper(".large-products-slider .swiper", {
    pagination: {
      el: ".large-products-slider .swiper-pagination",
    },
  });
}

/* #Products Slider
  ======================================================= */

// Slider
if (document.querySelector('.products-slider .swiper')) {
  new Swiper(".products-slider .swiper", {
    navigation: {
      nextEl: ".products-slider .next",
      prevEl: ".products-slider .prev",
    },
    pagination: {
      el: ".products-slider .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
}

/* #Home Videos
  ======================================================= */

// Slider
if (document.querySelector('.home-videos .swiper')) {
  new Swiper(".home-videos .swiper", {
    navigation: {
      nextEl: ".home-videos .next",
      prevEl: ".home-videos .prev",
    },
    pagination: {
      el: ".home-videos .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      1024: {
        slidesPerView: 3.25
      }
    }
  });
}

/* #Home Community
  ======================================================= */

// Slider
if (document.querySelector('.home-community .swiper')) {
  new Swiper(".home-community .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        centeredSlides: true,
        loop: true
      },
      1024: {
        slidesPerView: 5,
        centeredSlides: false,
        loop: false
      }
    }
  });
}

/* #CS Navigation
  ======================================================= */

// Slider
if (document.querySelector('.cs-navigation .swiper')) {
  new Swiper(".cs-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.75,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  });
}