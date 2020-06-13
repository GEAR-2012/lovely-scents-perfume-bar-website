//jshint esversion: 6

const getMenuBtn = document.querySelector(".container-menu-btn");
const getMenuItems = document.querySelectorAll(".menu-item");
const getMenu = document.querySelector(".menu");
const x = window.innerWidth;

let menuSwitch = false; //Is menu on?

if (x < 1024) {
  getMenu.classList.add("no-show");
  getMenuBtn.addEventListener("click", menuToggle);
  for (let i = 0; i < getMenuItems.length; i++) {
    getMenuItems[i].addEventListener("click", menuToggle);
  }
}

function menuToggle() {
  let speed = 0.3; //animation speed in seconds
  let stiff = 8; //change the number bigger to more stiffness
  let menuLength = getMenuItems.length;
  if (menuSwitch === false) {
    //Switch on
    getMenu.classList.toggle("no-show");
    for (i = 0; i < menuLength; i++) {
      getMenuItems[i].style.transition = "all " + speed + "s " + i * (speed / stiff) + "s";
      getMenuItems[i].style.transform = "skewY(-3deg) translateX(15px)";
    }
    menuSwitch = true;
  } else if (menuSwitch === true) {
    //Switch off
    getMenu.classList.toggle("no-show");
    for (i = 0; i < menuLength; i++) {
      getMenuItems[i].style.transition = "all " + speed + "s " + i * (speed / stiff) + "s";
      getMenuItems[i].style.transform = "skewY(-3deg) translateX(210px)";
    }
    menuSwitch = false;
  }
}
