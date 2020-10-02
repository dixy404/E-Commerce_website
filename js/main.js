//MEGA MENU
function myFunction(event) {
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
