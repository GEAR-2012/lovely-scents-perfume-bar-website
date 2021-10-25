/*
Last modified 15 Dec 2020 by Sandor Tudja in Kemnay, Scotland
© Gear Web development 2020
*/

// variables
// perfume number list of unavailable perfumes:
const unavailablePerfumes = [101, 129, 148, 155, 161, 168, 202, 279];
// perfume number list of new perfumes:
const newPerfumes = [109, 126, 144, 287, 294];
// perfume number list of perfumes on sale:
const onSalePerfumes = [107, 153, 267, 274];

// get elements
const ladyPerfumesTable = document.getElementById("lady-perfumes");
const gentPerfumesTable = document.getElementById("gent-perfumes");
const legendUnavailable = document.querySelector(".legend>.unavailable");
const legendNew = document.querySelector(".legend>.new");
const legendOnSale = document.querySelector(".legend>.sale");

ladyPerfumesTable.innerHTML = "";
gentPerfumesTable.innerHTML = "";

fetch("perfumes.json")
  .then((response) => response.json())
  .then((data) => fillPerfumeListTable(data)); // perfume list object

/*Json file template:
{
    "no": 101,
    "code": "AR.CO",
    "inspiredBy": "Armani: CODE",
    "fragranceFamily": "virágos-narancsos, tubarózsás",
    "gender": "female",
}
*/

// fill the perfume list table with data of json file
function fillPerfumeListTable(perfumeList) {
  perfumeList.forEach(function (perfume) {
    let row = document.createElement("tr");
    let data1 = document.createElement("td"); // perfume number
    let data2 = document.createElement("td"); // perfume code
    let data3 = document.createElement("td"); // perfume name
    let data4 = document.createElement("td"); // fragrance family

    data1.textContent = perfume.no;
    data2.textContent = perfume.code;
    data3.textContent = perfume.inspiredBy;
    data4.textContent = perfume.fragranceFamily;

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);

    // mark the actual row
    newPerfumes.forEach((perfNo) => {
      if (perfume.no == perfNo) {
        row.classList.add("new");
        row.setAttribute("title", "This perfume is a New Arrival.");
      }
    });
    onSalePerfumes.forEach((perfNo) => {
      if (perfume.no == perfNo) {
        row.classList.add("sale");
        row.setAttribute("title", "This perfume is on sale.");
      }
    });
    unavailablePerfumes.forEach((perfNo) => {
      if (perfume.no == perfNo) {
        row.className = ""; //clear all other class names (because interference)
        row.classList.add("unavailable");
        row.setAttribute("title", "This perfume Temporarily does not available.");
      }
    });

    if (perfume.gender === "female") {
      ladyPerfumesTable.appendChild(row);
    } else if (perfume.gender === "male") {
      gentPerfumesTable.appendChild(row);
    } else {
      alert("Unexpected error....");
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
