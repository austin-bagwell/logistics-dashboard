"use strict";
console.log(`Hello from /public/app/script.js`);

// FIXME how to assign 'active' to specific e.target
// the below will add 'active' to the li class list, but only if you click the li element specifically - obviously this sucks
const btnsSidenav = document.querySelector(".sidenav__items");

btnsSidenav.addEventListener("click", (e) => {
  //   e.preventDefault();

  const btnComponents = ["A", "IMG", "LI", "P"];

  if (btnComponents.includes(e.target.tagName.toUpperCase())) {
    const kiddos = e.target.children;
    console.log(
      `Clicked a sidnav button 'component', specifically, a ${e.target.tagName}.`
    );

    // const liSidenav = document.querySelectorAll(".sidenav__item");

    // liSidenav.forEach((li) => {
    //   //   li.classList.toggle("active");
    //   li.classList.remove("active");
    // });

    // if (e.target.tagName.toUpperCase() === "LI") {
    //   e.target.classList.add("active");
    // } else console.log(e.target);
  }
});
