"use strict";
console.log(`Hello from /public/app/script.js`);

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-container");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
