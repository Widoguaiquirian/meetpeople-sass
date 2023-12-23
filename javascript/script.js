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
