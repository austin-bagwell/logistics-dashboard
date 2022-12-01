"use strict";
console.log(`Hello from /public/app/script.js`);
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContainer = document.querySelector(".dropdown-container");
dropdownToggle.addEventListener("click", ()=>{
    dropdownContainer.classList.toggle("show");
    console.log("you clicked dropdown toggler");
});
window.onclick = function(e) {
    if (!e.target.matches(".dropdown-toggle")) {
        const dropdowns = document.querySelectorAll(".dropdown-container");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) openDropdown.classList.remove("show");
        }
    }
};

//# sourceMappingURL=index.747d2617.js.map
