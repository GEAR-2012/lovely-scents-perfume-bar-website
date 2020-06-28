/* Last modified 28 Jun 2020 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2020 */
const getMenuBtn = document.querySelector(".container-menu-btn");
const getMenuItems = document.querySelectorAll(".menu-item");
const getMenu = document.querySelector(".menu");
const screenWidth = window.outerWidth;
const menuAnimSpeed = 0.3; //animation speed in seconds
const menuStiffness = 8; //change the number bigger to more stiffness
const itemAnimDelay = menuAnimSpeed / menuStiffness; // item anim delay increment
let fullAnimTime = menuAnimSpeed + itemAnimDelay * getMenuItems.length;
let menuSwitch = true; //Is menu on?
let hideTimer;
let delayTimer;

/* CHECK FOR CHANGE OF MEDIA IF SO REFRESH THE PAGE */
let media = 0;

onload = function () {
    // determine the size of media
    chageMedia();
};

onorientationchange = function () {
    location.reload();
};

onresize = function () {
    // check for change of media
    if (chageMedia()) {
        location.reload();
    }
};

function chageMedia() {
    const switchPoints = {
        size_1: 768,
        size_2: 1024,
        size_3: 1366,
    }; // media switch points
    let windowSize = window.innerWidth;
    let newMed = 0;
    // determine the size of media
    if (windowSize < switchPoints.size_1) {
        newMed = 1;
    } else if (windowSize < switchPoints.size_2) {
        newMed = 2;
    } else if (windowSize < switchPoints.size_3) {
        newMed = 3;
    } else {
        newMed = 4;
    }
    // if the media changed return true else false
    if (newMed != media) {
        media = newMed;
        return true;
    } else {
        return false;
    }
}
/* end of: CHECK FOR CHANGE OF MEDIA IF SO REFRESH THE PAGE */

// calculate the hidden state of the menu items (transleteX amount)
function setMenuSlideAmount() {
    let x; // hidden state of the menu items (transleteX amount)
    if (screenWidth < 768) {
        // mobile
        x = 160;
    } else if (screenWidth < 1024) {
        // small tablet
        x = 250;
    } else if (screenWidth < 1366) {
        // large tablet
        x = 300;
    }
    return x;
}

// mobile portrait & landscape & tablet portrait
if (screenWidth < 1366) {
    setUpMenu();
}

function setUpMenu() {
    getMenuBtn.addEventListener("click", menuToggle);
    menuToggle();
    // set menu items to animate
    getMenuItems.forEach((menuItem, i) => {
        menuItem.addEventListener("click", menuToggle);
        menuItem.style.transition = `all ${menuAnimSpeed}s ${
            (i + 1) * itemAnimDelay
        }s`;
    });
}

function menuToggle() {
    let slideFrom = setMenuSlideAmount(); // hidden state of the menu items (transleteX amount)
    let slideTo = 15; // unhidden state of the menu items (transleteX amount)
    let moveX = slideTo; // actual state of the menu items (transleteX amount)
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
        moveX = slideFrom;
        menuSwitch = false;
    }
    // Pull in & out all menu items
    delayTimer = setTimeout(() => {
        getMenuItems.forEach((menuItem) => {
            menuItem.style.transform = `skewY(-3deg) translateX(${moveX}px)`;
        });
    }, 10);
}
