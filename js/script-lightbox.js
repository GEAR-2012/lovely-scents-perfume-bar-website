//jshint esversion: 6

const bigPicture = document.querySelector(".lightbox-container .big-picture");
const counter = document.querySelector(".lightbox-container .big-picture .text.counter");
const caption = document.querySelector(".lightbox-container .big-picture .text.caption");
const thumbnail = document.querySelectorAll(".lightbox-container img");
const thumbstripCont = document.querySelector(".lightbox-container .thumbstrip-container");
const thumbstrip = document.querySelector(".lightbox-container .thumbstrip");
const thumbstripW = thumbstrip.offsetWidth; //width of the thumbstrip.
const timoutNow = 10000; // idle timer's time 10s.
let timeoutTimer; //define the idle timer's name.
let num; //define the randon number holder.
const refesherTime = 8000; // The big picture refreshing interval.
let myTimer; //define the page refesher timer's name.
const thumbCount = thumbnail.length; //count of the thumbnails.
const scrollA = thumbstripW / thumbCount; //scrolling amounth.

randomNumber(); //call this for the initial picture.

// Start idle timer.
function StartTimer() {
  timeoutTimer = setTimeout(IdleTimeout, timoutNow);
}

// Reset timer & interval.
function ResetTimer() {
  clearTimeout(timeoutTimer);
  clearInterval(myTimer);
  StartTimer();
}

// Action when the idle timer is over. Call the randomizer.
function IdleTimeout() {
  myTimer = setInterval(randomNumber, refesherTime);
}

//generate a random index number, and call the changer function.
function randomNumber() {
  let newNum;
  newNum = Math.floor(Math.random() * thumbCount);
  if (newNum === num) {
    newNum++;
    num = newNum;
  } else {
    num = newNum;
  }
  showSlide(thumbstripIndex = num);
}

//click on arrow buttons.
function plusSlide(n) {
  showSlide(thumbstripIndex += n);
}

//click on tumbnails
function actualSlide(n) {
  showSlide(thumbstripIndex = n);
}

//refresh the big picture
function showSlide(n) {
  if (thumbstripIndex > thumbCount - 1) {
    thumbstripIndex = 0;
  }
  if (thumbstripIndex < 0) {
    thumbstripIndex = thumbCount - 1;
  }
  for (let i = 0; i < thumbCount; i++) {
    thumbnail[i].classList.remove("active");
  }

  thumbnail[thumbstripIndex].classList.toggle("active");
  thumbstripCont.scrollTo(thumbstripIndex * scrollA * 2, 0);
  bigPicture.style.backgroundImage = "url(" + thumbnail[thumbstripIndex].getAttribute("src") + ")";
  //counter
  counter.innerHTML = `${thumbstripIndex + 1} / ${thumbCount}`;

  //caption
  caption.innerHTML = thumbnail[thumbstripIndex].getAttribute("alt");
}
