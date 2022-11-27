"use strict";
console.log(`Hello from /public/app/script.js`);

// FIXME reloads page on every function call
const sidenavItems = document.querySelectorAll(".sidenav__item");

// sidenavItems.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     console.log(`clicked on e: ${e}`);
//     sidenavItems.forEach((f) => {
//       f.classList.remove("active");
//     });
//     e.target.classList.toggle("active");
//   });
// });

const test = document.querySelector("#test");

test.addEventListener("click", () => {
  test.classList.toggle("active");
  test.preventDefault();
});
