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

const selectShipfrom = document.querySelector("#select-shipfrom-locations");

// FETCH AND API FUNCS
function fetchOK(url, options) {
  return fetch(url, options).then((response) => {
    if (response.status < 400) return response;
    else throw new Error(response.statusText);
  });
}

function abbreviateShipfrom(location) {
  if (location === "durham") return "DUR";
  if (location === "emeryville") return "SF";
}
function fetchConsigneeURLBuilder(el) {
  const url = `/consignees/${abbreviateShipfrom(el.value)}`;
  return url;
}

selectShipfrom.addEventListener("change", (e) => {
  const request = fetchConsigneeURLBuilder(e.target);
  const config = {
    method: "GET",
  };
  // console.log(`Sending to endpoint: ${request}`);
  fetchOK(request, config)
    .then((response) => response.json())
    .then((body) => console.log(body));
});
