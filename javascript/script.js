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
