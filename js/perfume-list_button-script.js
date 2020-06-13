//jshint esversion: 6

const btnParlistFemale = document.querySelector(".btn.parlist.female");
const btnParlistMale = document.querySelector(".btn.parlist.male");
const tableParlistFemale = document.querySelector(".table.parlist.female");
const tableParlistMale = document.querySelector(".table.parlist.male");
let btnSwitch = true; //so female active

//set the female part active
btnParlistFemale.style.opacity = "1";
btnParlistMale.style.opacity = ".5";
tableParlistFemale.style.display = "table";
tableParlistMale.style.display = "none";
btnParlistMale.addEventListener("click", perfumeListSelector);

function perfumeListSelector() {
  if (btnSwitch === true) {
    btnParlistFemale.style.opacity = ".5";
    btnParlistMale.style.opacity = "1";
    tableParlistFemale.style.display = "none";
    tableParlistMale.style.display = "table";
    btnParlistFemale.addEventListener("click", perfumeListSelector);
    btnParlistMale.removeEventListener("click", perfumeListSelector);
    btnSwitch = false;
  } else if (btnSwitch === false) {
    btnParlistFemale.style.opacity = "1";
    btnParlistMale.style.opacity = ".5";
    tableParlistFemale.style.display = "table";
    tableParlistMale.style.display = "none";
    btnParlistMale.addEventListener("click", perfumeListSelector);
    btnParlistFemale.removeEventListener("click", perfumeListSelector);
    btnSwitch = true;
  }
}
