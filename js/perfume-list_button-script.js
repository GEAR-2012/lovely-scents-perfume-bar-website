/* Last modified 01 Jul 2020 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2020 */
// get DOM elements
const btnParlistFemale = document.querySelector(".btn.parlist.female");
const btnParlistMale = document.querySelector(".btn.parlist.male");
const tableParlistFemale = document.querySelector(".table.parlist.female");
const tableParlistMale = document.querySelector(".table.parlist.male");

//set the female table active
btnParlistMale.classList.add("btn-fade");
tableParlistMale.classList.add("hide");
btnParlistMale.addEventListener("click", perfumeListSelector);
btnParlistFemale.addEventListener("click", perfumeListSelector);

// switch between female & male tables
function perfumeListSelector() {
    btnParlistFemale.classList.toggle("btn-fade");
    btnParlistMale.classList.toggle("btn-fade");
    tableParlistFemale.classList.toggle("hide");
    tableParlistMale.classList.toggle("hide");
}
