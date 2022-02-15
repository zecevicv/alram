/* #Header
  ======================================================= */
const body = document.querySelector('body');

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

if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !header.classList.contains('inverted')) {
      header.classList.add('header-white');
    } else {
      header.classList.remove('header-white');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
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

/* #Blog Navigation
  ======================================================= */

// Slider
if (document.querySelector('.blog-navigation .swiper')) {
  new Swiper(".blog-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.75,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
}

/* #Posts Slider
  ======================================================= */
const postsSliders = document.querySelectorAll('.posts-slider .swiper');

// Slider
if (postsSliders) {
  postsSliders.forEach((slider) => {
    new Swiper(slider, {
      navigation: {
        nextEl: slider.closest('.posts-slider').querySelector('.next'),
        prevEl: slider.closest('.posts-slider').querySelector('.prev')
      },
      pagination: {
        el: slider.closest('.posts-slider').querySelector('.swiper-pagination'),
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
        },
        1024: {
          slidesPerView: 4.25,
        }
      },
    });
  });
}

/* #Videos Slider
  ======================================================= */
const videosSliders = document.querySelectorAll('.videos-slider .swiper');

// Slider
if (videosSliders) {
  videosSliders.forEach((slider) => {
    new Swiper(slider, {
      navigation: {
        nextEl: slider.closest('.tab-panel').querySelector('.next'),
        prevEl: slider.closest('.tab-panel').querySelector('.prev')
      },
      pagination: {
        el: slider.closest('.tab-panel').querySelector('.swiper-pagination'),
      },
      breakpoints: {
        0: {
          slidesPerView: 1.25,
        },
        1024: {
          slidesPerView: 4.25,
        }
      },
    });
  });
}

/* #Blog Navigation
  ======================================================= */

// Slider
if (document.querySelector('.blog-gallery')) {
  const thumbsSwiper = new Swiper(".blog-gallery .swiper-thumbs", {
    loop: true,
    slidesPerView: 4,
    watchSlidesProgress: true,
  });
  new Swiper(".blog-gallery .swiper-gallery", {
    loop: true,
    navigation: {
      nextEl: ".blog-gallery .swiper-button-next",
      prevEl: ".blog-gallery .swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
}

/* #Popup
  ======================================================= */
const popups = document.querySelectorAll('.popup');
const popupTogglers = document.querySelectorAll('.popup-toggler');
const popupClosers = document.querySelectorAll('.popup-close');
const popupBackdrops = document.querySelectorAll('.popup-backdrop');

if (popups && popupTogglers) {
  popups.forEach((popup) => {
    gsap.set(popup, {
      display: 'block'
    });
  });

  popupTogglers.forEach((toggler) => {

    toggler.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = document.querySelector(toggler.dataset.popup);

      body.classList.add('no-scroll');
      popup.classList.add('show');
    });
  });
}

if (popupClosers) {
  popupClosers.forEach((closer) => {
    closer.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = closer.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');

    })
  });
}

if (popupBackdrops) {
  popupBackdrops.forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = backdrop.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');

    })
  });
}

/* #Product Purchase Guide
  ======================================================= */
if (document.querySelector('.product-purchase-guide .swiper')) {
  new Swiper(".product-purchase-guide .swiper", {
    navigation: {
      nextEl: ".product-purchase-guide .swiper-button-next",
      prevEl: ".product-purchase-guide .swiper-button-prev",
    },
    pagination: {
      el: ".product-purchase-guide .swiper-pagination",
    },
  });
}