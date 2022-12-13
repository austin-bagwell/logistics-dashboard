"use strict";
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
const consigneeListWrapper = document.querySelector(".consignee-list-wrapper");

// FETCH AND API FUNCS
function fetchOK(url, options) {
  return fetch(url, options).then((response) => {
    if (response.status < 400) return response;
    else throw new Error(response.statusText);
  });
}
function reportError(error) {
  alert(String(error));
}

function fetchConsigneeURLBuilder(el) {
  const url = `/consignees/${el.value.toUpperCase()}`;
  return url;
}

// DOM ELEMENT CREATION FUNCS
function elt(type, props, ...children) {
  let dom = document.createElement(type);
  if (props) Object.assign(dom, props);

  for (let child of children) {
    if (typeof child != "string") {
      dom.appendChild(child);
    } else dom.appendChild(document.createTextNode(child));
  }
  return dom;
}

function removeInnerHTML(targetNode) {
  targetNode.innerHTML = "";
}

function renderNewConsigneeList(targetNode, newList) {
  return targetNode.appendChild(
    elt(
      "ul",
      { className: "consignee-list" },
      ...newList.map((item) =>
        elt("li", { classList: "consignee-list-item" }, item.consignee_name)
      )
    )
  );
}

// LISTENERS
selectShipfrom.addEventListener("change", (e) => {
  const request = fetchConsigneeURLBuilder(e.target);
  const config = {
    method: "GET",
  };
  // console.log(`Sending to endpoint: ${request}`);
  fetchOK(request, config)
    .then((response) => response.json())
    .then((body) => {
      removeInnerHTML(consigneeListWrapper);
      renderNewConsigneeList(consigneeListWrapper, body);
    })
    .catch(reportError);
});
