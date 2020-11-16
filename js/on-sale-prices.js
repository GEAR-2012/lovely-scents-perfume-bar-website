/* Last modified 01 Jul 2020 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2020 */
//
// get all tr in pricelist table
let priceLsTable = document.querySelectorAll(".table.pricelist.init>tbody>tr");
const saleTxt = document.querySelector(".special__offer");

let newPriceArr = ["4.90", "4.50", "7.50", "9.90", "14.90", "17.50", "20.50"];

saleTitleText = `Winter Sale`;
saleExplText = `Great opportunity to get your favourite fragrance for an even better price until the end of January.`;

// this loop is add a new prices next to the old ones
priceLsTable.forEach((elem, i) => {
    let newTd = document.createElement("td");
    let text = "£";
    text += newPriceArr[i];
    let txtNode = document.createTextNode(text);
    newTd.appendChild(txtNode);
    elem.appendChild(newTd);
});

let title = document.createElement("div");
let explain = document.createElement("div");
title.innerHTML = `<p class="title">${saleTitleText}</p>`;
explain.innerHTML = `<p class="explain">${saleExplText}</p>`;

saleTxt.appendChild(title);
saleTxt.appendChild(explain);
