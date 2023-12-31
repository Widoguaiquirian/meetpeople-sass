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

// Testimonials slide
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const container = document.querySelector(".testimonials");
const testimonials = document.querySelectorAll(".testimonials-row-block");

let idx = 0;

btnRight.style.animationName = "rightArrow";
btnLeft.style.animationName = "";

const changeImage = function () {
  if (idx > testimonials.length - 1) {
    idx = 0;
    btnLeft.style.animationName = "";
  } else if (idx < 1) {
    idx = 0;
  } else if (idx >= 1) {
    btnLeft.style.animationName = "leftArrow";
  }

  testimonials.forEach(function (testimonial) {
    testimonial.style.transform = `translateX(${
      -idx * testimonial.clientWidth
    }px)`;
  });
};

btnRight.addEventListener("click", function () {
  idx++;
  changeImage();
});

btnLeft.addEventListener("click", function () {
  idx--;
  changeImage();
});
