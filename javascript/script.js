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
