"use strict";
// DOM ELEMENTS
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContainer = document.querySelector(".dropdown-container");
const selectShipfrom = document.querySelector("#select-shipfrom-locations");
const consigneeListWrapper = document.querySelector(".consignee-list-wrapper");
const shipmentsTableWrapper = document.querySelector(
  ".shipments-table-wrapper"
);
const shipmentsTable = document.querySelector(".shipments-table");

// DOM ANIMATION
// dropdown menus, collapse sidenav, ect.
dropdownToggle.addEventListener("click", () => {
  dropdownContainer.classList.toggle("show");
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

const btnToggleNewShipmentModal = document.querySelector("#btn-new-shipment");

btnToggleNewShipmentModal.addEventListener("click", () => {
  const modal = document.querySelector(".modal.new-shipment-wrapper");
  modal.classList.toggle("hidden");
});

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

// DOM ELEMENT CREATION
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

function listShipmentHeaderIDs() {
  const headerIDs = document.querySelectorAll(".tableHeadCol");
  const idList = [];
  headerIDs.forEach((header) => idList.push(header.id));
  return idList;
}

function generateShipmentRowsHtmlString(shipmentsJSON) {
  const headers = listShipmentHeaderIDs();
  let html = "";

  for (let shipment of shipmentsJSON) {
    let row = "<tr>";
    for (let header of headers) {
      row += `<td>${
        typeof shipment[header] === "string" ? shipment[header] : ""
      }</td>`;
    }
    row += `</tr>`;
    html += row;
  }
  return html.trim();
}
function addShipmentsToTableBody() {
  const shipmentsTableBody = document.querySelector(".shipments-table-body");
  fetchOK("/shipments", { method: "GET" })
    .then((response) => response.json())
    .then((body) => {
      shipmentsTableBody.insertAdjacentHTML(
        "afterbegin",
        generateShipmentRowsHtmlString(body)
      );
    });
}
addShipmentsToTableBody();

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

const newShipmentForm = document.querySelector(".new-shipments-form");
// newShipmentForm.addEventListener('onsubmit', repaintDOMWithNewShipmentsList)

//
// FORM HANDLERS
//

// Think I need to build an object with all the new shipment form inputs here
function validateNewShipmentInput() {}

function buildNewShipmentReq() {}

function postNewShipment() {}

function renderShipmentList() {}
