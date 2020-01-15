const menuBtn = document.querySelector(".menu-btn"),
  burger = document.querySelector(".menu-btn__burger"),
  nav = document.querySelector(".nav"),
  navItems = document.querySelector(".nav-items"),
  navItem = document.querySelectorAll(".nav-items__item");

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    burger.classList.add("open");
    nav.classList.add("open");
    navItems.classList.add("open");
    navItem.forEach(item => {
      item.classList.add("open");
    });

    showMenu = true;
  } else {
    burger.classList.remove("open");
    nav.classList.remove("open");
    navItems.classList.remove("open");
    navItem.forEach(item => {
      item.classList.remove("open");
    });
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
