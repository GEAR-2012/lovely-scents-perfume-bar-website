/*
Last modified 27 Jun 2020 by Sandor Tudja in Kemnay, Scotland
© Gear Web development 2020
*/

// variables
const unavailablePerfumes = []; // perfume number list of unavailable perfumes
const newPerfumes = [112, 139, 150, 178, 179, 180, 181, 296, 297]; // perfume number list of new perfumes
const onSalePerfumes = []; // perfume number list of perfumes on sale

// get elements
const legendUnavailable = document.querySelector(".legend>.unavailable");
const legendNew = document.querySelector(".legend>.new");
const legendOnSale = document.querySelector(".legend>.sale");

// get all rows in perfumelist tables
const rows = document.querySelectorAll("table.table.parlist tr");

// marking rows in the perfume list
for (let row of rows) {
    unavailablePerfumes.forEach((perfNo) => {
        if (row.firstElementChild.innerText == perfNo) {
            row.classList.add("unavailable");
            row.setAttribute(
                "title",
                "This perfume Currently does not available."
            );
        }
    });
    newPerfumes.forEach((perfNo) => {
        if (row.firstElementChild.innerText == perfNo) {
            row.classList.add("new");
            row.setAttribute("title", "This perfume is a New Arrival.");
        }
    });
    onSalePerfumes.forEach((perfNo) => {
        if (row.firstElementChild.innerText == perfNo) {
            row.classList.add("sale");
            row.setAttribute("title", "This perfume is on sale.");
        }
    });
}

// unhide the correspondent legend if necessary
if (unavailablePerfumes.length > 0) {
    legendUnavailable.classList.remove("hide");
}
if (newPerfumes.length > 0) {
    legendNew.classList.remove("hide");
}
if (onSalePerfumes.length > 0) {
    legendOnSale.classList.remove("hide");
}
