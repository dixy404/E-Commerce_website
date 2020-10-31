//MEGA MENU
const icon = document.querySelector("#hamburgerIcon");
const menu = document.querySelector("#mega-menu");

(function () {
  var dropBtns = document.querySelectorAll(".dropdown");

  function closeOpenItems() {
    openMenus = document.querySelectorAll(".dropdown-content");
    openMenus.forEach(function (menus) {
      menus.classList.remove("show");
    });
  }

  dropBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var dropContent = btn.querySelector(".dropdown-content"),
        shouldOpen = !dropContent.classList.contains("show");
      e.preventDefault();

      //Close all open items
      closeOpenItems();
      // Check if the clicked item should be opened
      if (shouldOpen) {
        // Open the clicked item
        dropContent.classList.add("show");
      }
      e.stopPropagation();
    });
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target != dropBtns) {
      closeOpenItems();
    }
  });
})();

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
