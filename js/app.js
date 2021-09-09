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