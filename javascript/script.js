"use strict";
// Countries dropDown
document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#countries");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((countriesList) => {
      let output = "";
      countriesList.forEach((country) => {
        output += `<option>${country.name.common}</option>
        `;
      });
      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});

//stories slider

const slides = document.querySelector(".testimonials-box-row");
const btnLeft = document.querySelector(".left-arrow");
const btnRight = document.querySelector(".right-arrow");

let curSlide = 1;

const prevSlide = function () {
  curSlide--;

  if (curSlide == 0) {
    curSlide = 1;
  } else if (curSlide == 1) {
    slides.style.transform = "translateX(0)";
  } else if (curSlide == 2) {
    slides.style.transform = "translateX(-370px)";
  } else if (curSlide == 3) {
    slides.style.transform = "translateX(-740px)";
  } else if (curSlide == 4) {
    slides.style.transform = "translateX(-1110px)";
  } else if (curSlide == 5) {
    slides.style.transform = "translateX(-1480px)";
  }
};

const nextSlide = function () {
  curSlide++;

  if (curSlide == 2) {
    slides.style.transform = "translateX(-370px)";
  } else if (curSlide == 3) {
    slides.style.transform = "translateX(-741px)";
  } else if (curSlide == 4) {
    slides.style.transform = "translateX(-1120px)";
  } else if (curSlide == 5) {
    slides.style.transform = "translateX(-1485px)";
  } else if (curSlide == 6) {
    slides.style.transform = "translateX(0)";
    curSlide = 1;
  }
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// mobile menu
const openMenuMobile = document.querySelector("#nav-btn--open");
const closeMenuMobile = document.querySelector("#nav-btn--close");
const hamburguerMenu = document.querySelector(".nav-mobile");

openMenuMobile.addEventListener("click", function () {
  hamburguerMenu.classList.add("active");
});

closeMenuMobile.addEventListener("click", function () {
  hamburguerMenu.classList.remove("active");
});

//! Hook up
const btnUp = document.getElementById("button-up");

btnUp.addEventListener("click", scrollUp);

function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 200) {
    btnUp.style.transform = "scale(1)";
  } else if (scroll < 200) {
    btnUp.style.transform = "scale(0)";
  }
};
