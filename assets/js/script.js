const collapsibles = document.querySelectorAll(".collapsible");
const hamburger = document.querySelectorAll(".menu");
const menuIcon = document.querySelectorAll(".nav__menu");
const navbar = document.querySelector(".nav");
const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const dropdown = document.querySelectorAll(".dropdown");
const notification = document.querySelector(".notification");
const notificationBtn = document.querySelector(".notification__icon");
const timelineCard = document.querySelectorAll(".timeline-card-wrapper");
const breadcrumb = document.querySelectorAll(".breadcrumb__list-item");
const imageModal = document.querySelectorAll(".image-modal__popup");
const popup = document.querySelectorAll(".popup");
const popupBtn = document.querySelectorAll(".popup__btn");
const popupClose = document.querySelector(".popup__close-icon");
const contactFormBtn = document.querySelectorAll(".nav__contact");
const contactForm = document.querySelector(".contact");
const formClose = document.querySelector(".contact__form-close");

popup.forEach((popupItem) => {
  popupBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      popupItem.classList.add("popup--active");
    });
  });
});

popup.forEach((popupItem) => {
  popupClose.addEventListener("click", function () {
    popupItem.classList.remove("popup--active");
  });
});

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
  });
});

hamburger.forEach((hambItem) => {
  hambItem.addEventListener("click", function () {
    hambItem.classList.toggle("menu--active");
  });
});

menuIcon.forEach((icon) => {
  icon.addEventListener("click", function () {
    navbar.classList.toggle("nav-active");
  });
});

mobileMenu.addEventListener("click", () => {
  desktopMenu.classList.remove("menu--active");
});

// desktopMenu.addEventListener("click", () => {
//   mobileMenu.classList.toggle("menu--active");
// });

dropdown.forEach((dropdownItem) => {
  dropdownItem.addEventListener("click", function () {
    dropdownItem.classList.toggle("dropdown-active");
  });
});

notificationBtn.addEventListener("click", () => {
  notification.style.display = "none";
});

contactFormBtn.forEach((formBtn) => {
  formBtn.addEventListener("click", function () {
    contactForm.classList.add("contact--active");
  });
});

if (formClose) {
  console.log("EXIST");
  formClose.addEventListener("click", function () {
    contactForm.classList.remove("contact--active");
  });
} else {
  console.log("ERROR:");
}

// ---------------------------------- Card - Slider
var swiper = new Swiper(".portfolio-slider__wrapper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 4,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    980: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".portfolio-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".portfolio-slider__next",
    prevEl: ".portfolio-slider__prev",
  },
});

// ---------------------------------- Feature - Slider
var swiper = new Swiper(".feature-slider__wrapper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    980: {
      slidesPerView: 4,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".feature-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".feature-slider__next",
    prevEl: ".feature-slider__prev",
  },
});

//  ----------------------------------- GAllery- Slider ---------
var swiper = new Swiper(".gallery-slider__swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".gallery-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery-slider__next",
    prevEl: ".gallery-slider__prev",
  },
});
