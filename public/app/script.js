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

const btnsSidenav = document.querySelector(".sidenav__items");

btnsSidenav.addEventListener("click", (e) => {
  e.preventDefault();
  // FIXME how to assign 'active' to specific e.target
  const btnComponents = ["A" /*, "IMG", "LI", "P"*/];

  if (btnComponents.includes(e.target.tagName.toUpperCase())) {
    console.log(`clicked a link button`);
    const liSidenav = document.querySelectorAll(".sidenav__item");
    liSidenav.forEach((li) => {
      li.classList.toggle("active");
    });
  } else console.log(e.target);
});

const test = document.querySelector("#title-test");
test.addEventListener("click", () => {
  test.innerText = "clicked title";
  console.log(`clicked tilte... did the page preload?`);
  //   test.preventDefault();
});
