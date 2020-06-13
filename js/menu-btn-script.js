//jshint esversion: 6

const btn = document.querySelector(".container-menu-btn");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const circle = document.querySelector(".circle");
const speed = 0.5;
const menuItems = document.querySelectorAll(".menu-item");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", animateMenuBtn);
}

line1.style.transition = "all " + speed + "s cubic-bezier(.7, 0, .2, 2)";
line1.style.transformOrigin = "12px 18px";
line2.style.transition = "all " + speed + "s cubic-bezier(.7, 0, .2, 2)";
line2.style.transformOrigin = "28px 28px";
line3.style.transition = "all " + speed + "s cubic-bezier(.7, 0, .2, 2)";
line3.style.transformOrigin = "12px 38px";
circle.style.transition = "all " + speed + "s cubic-bezier(.7, 0, .2, 2)";
circle.style.transformOrigin = "28px 28px";

let sw = false; //Is the menu btn open?

btn.addEventListener("click", animateMenuBtn);

function animateMenuBtn() {
  if (sw === false) {
    line1.style.transform = "translate(7.19px, 1.19px) rotate(45deg) scaleX(0.75)";
    line2.style.transform = "rotate(270deg) scaleX(0.001)";
    line2.style.opacity = "0";
    line3.style.transform = "translate(7.19px, -1.19px) rotate(-45deg) scaleX(0.75)";
    circle.style.opacity = "1";
    circle.style.transform = "scale(9.5)";
    sw = true;
  } else if (sw === true) {
    line1.style.transform = "rotate(0deg) scaleX(1)";
    line2.style.transform = "rotate(0deg) scaleX(1)";
    line2.style.opacity = "1";
    line3.style.transform = "rotate(0deg) scaleX(1)";
    circle.style.opacity = "0";
    circle.style.transform = "scale(1)";
    sw = false;
  }
}
