"use strict";
console.log(`Hello from /public/app/script.js`);

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContainer = document.querySelector(".dropdown-container");

dropdownToggle.addEventListener("click", () => {
  dropdownContainer.classList.toggle("show");
  console.log("you clicked dropdown toggler");
});

window.onclick = function (e) {
  if (!e.target.matches(".dropdown-toggle")) {
    const dropdowns = document.querySelectorAll(".dropdown-container");

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const selectShipfrom = document.querySelector("#shipfrom-locations");

// for consignees only obviously
function fetchConsigneeURLBuilder(el) {
  const url = `/consignees/${el.value}`;
  return url;
}

selectShipfrom.addEventListener("change", (e) => {
  // build a fetch request that goes to /consignees
  // and changes some DOM text
  const request = fetchConsigneeURLBuilder(e.target);
  const config = {
    method: "GET",
  };
  console.log(`Sending to endpoint: ${request}`);
  fetch(request, config)
    .then((response) => response.json())
    .then((body) => console.log(body));
});
