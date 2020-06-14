/* Last modified 14 Jun 2020 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2020 */
const getMenuBtn = document.querySelector(".container-menu-btn");
const getMenuItems = document.querySelectorAll(".menu-item");
const getMenu = document.querySelector(".menu");
const screenWidth = window.outerWidth;
const menuAnimSpeed = 0.3; //animation speed in seconds
const menuStiffness = 8; //change the number bigger to more stiffness
const itemAnimDelay = menuAnimSpeed / menuStiffness; // item anim delay increment
var fullAnimTime = menuAnimSpeed + itemAnimDelay * getMenuItems.length;
let menuSwitch = false; //Is menu on?
let hideTimer;
let delayTimer;

// mobile portrait & landscape & tablet portrait
if (screenWidth <= 1024) {
  setUpMenu();
}

function setUpMenu() {
  getMenuBtn.addEventListener("click", menuToggle);
  getMenu.classList.add("no-show");
  // set menu items to animate
  getMenuItems.forEach((menuItem, i) => {
    menuItem.addEventListener("click", menuToggle);
    menuItem.style.transition = `all ${menuAnimSpeed}s ${
      (i + 1) * itemAnimDelay
    }s`;
  });
}

function menuToggle() {
  let moveX = 15;
  clearTimeout(hideTimer);
  clearTimeout(delayTimer);
  if (menuSwitch === false) {
    // show
    getMenu.classList.remove("no-show");
    menuSwitch = true;
  } else if (menuSwitch === true) {
    // hide
    hideTimer = setTimeout(() => {
      getMenu.classList.add("no-show");
    }, fullAnimTime * 1000);
    moveX = 210;
    menuSwitch = false;
  }
  // Pull in & out all menu items
  delayTimer = setTimeout(() => {
    getMenuItems.forEach((menuItem) => {
      menuItem.style.transform = `skewY(-3deg) translateX(${moveX}px)`;
    });
  }, 10);
}
