//MEGA MENU
/* function myFunction(event) {
  event.stopPropagation();
  document.getElementById("manDropdown").classList.toggle("show");
}

function myFunction2(event) {
  event.stopPropagation();
  document.getElementById("womanDropdown").classList.toggle("show");
}

function myFunction3(event) {
  event.stopPropagation();
  document.getElementById("childDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  document.getElementById("manDropdown").classList.remove("show");
  document.getElementById("womanDropdown").classList.remove("show");
  document.getElementById("childDropdown").classList.remove("show");
};

//Responsive mega menu
function megaFunction() {
  var x = document.getElementById("mega-menu");
  if (x.className === "nav-content") {
    x.className += " responsive";
  } else {
    x.className = "nav-content";
  }
} */

//MEGA MENU
const btnMan = document.querySelector("#btnMan");
const btnWoman = document.querySelector("#btnWoman");
const btnChild = document.querySelector("#btnChild");
const manMenu = document.querySelector("#manDropdown");
const womanMenu = document.querySelector("#womanDropdown");
const childMenu = document.querySelector("#childDropdown");

const icon = document.querySelector("#hamburgerIcon");
const menu = document.querySelector("#mega-menu");

//If the user clicks one dropdown close all others
btnMan.addEventListener("click", manDropdown);

function manDropdown() {
  manMenu.classList.toggle("show");
  womanMenu.classList.remove("show");
  childMenu.classList.remove("show");
}
manDropdown();

btnWoman.addEventListener("click", womanDropdown);

function womanDropdown() {
  womanMenu.classList.toggle("show");
  manMenu.classList.remove("show");
  childMenu.classList.remove("show");
}
womanDropdown();

btnChild.addEventListener("click", childDropdown);

function childDropdown() {
  childMenu.classList.toggle("show");
  manMenu.classList.remove("show");
  womanMenu.classList.remove("show");
}
childDropdown();

// Close the dropdown menu if the user clicks outside of it
/* window.onclick = function (event) {
  manMenu.classList.remove("show");
  womanMenu.classList.remove("show");
  childMenu.classList.remove("show");
}; */

//Responsive mega menu
icon.addEventListener("click", responsiveMenu);

function responsiveMenu() {
  if (menu.className === "nav-content") {
    menu.className += " responsive";
  } else {
    menu.className = "nav-content";
  }
}
responsiveMenu();
