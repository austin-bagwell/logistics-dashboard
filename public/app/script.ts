"use strict";
console.log(`Hello from /public/app/script.js`);

// FIXME reloads page on every function call
// const sidenavItems = document.querySelectorAll(".sidenav__item");

// FIXME typescript not found in path or something
// tsc command not found
// https://stackoverflow.com/questions/39404922/tsc-command-not-found-in-compiling-typescript

// sidenavItems.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     console.log(`clicked on e: ${e}`);
//     sidenavItems.forEach((f) => {
//       f.classList.remove("active");
//     });
//     e.target.classList.toggle("active");
//   });
// });

// const test = document.querySelector("#test");

// test.addEventListener("click", () => {
//   test.classList.toggle("active");
//   test.preventDefault();
// });

function greeter(person: string) {
  return `Hello, ${person}`;
}

let user = "Austin Bagwell";
const title = document.querySelector("#main-title");
title.textContent = greeter(user);
