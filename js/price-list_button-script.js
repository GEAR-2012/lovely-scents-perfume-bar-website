/* Last modified 17 Jun 2020 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2020 */
// get DOM elements
// buttons
let btnPricelistInit = document.querySelector(".btn.pricelist.init");
let btnPricelistRef = document.querySelector(".btn.pricelist.ref");
// tables
let tablePricelistInit = document.querySelector(".table.pricelist.init");
let tablePricelistRef = document.querySelector(".table.pricelist.ref");
// hr-s
let hr1 = document.querySelector(".hr__1");
// variables
let btnSwitch2 = true; //so init table active
const screenW = window.outerWidth;

if (screenW >= 568) {
    //settings to init table active
    btnPricelistInit.style.opacity = "1";
    btnPricelistRef.style.opacity = ".5";
    tablePricelistInit.style.display = "table";
    tablePricelistRef.style.display = "none";
    btnPricelistRef.addEventListener("click", priceListSelector);
    hr1.classList.add("hide");
}

function priceListSelector() {
    if (btnSwitch2 === true) {
        btnPricelistInit.style.opacity = ".5";
        btnPricelistRef.style.opacity = "1";
        tablePricelistInit.style.display = "none";
        tablePricelistRef.style.display = "table";
        btnPricelistInit.addEventListener("click", priceListSelector);
        btnPricelistRef.removeEventListener("click", priceListSelector);
        btnSwitch2 = false;
    } else if (btnSwitch2 === false) {
        btnPricelistInit.style.opacity = "1";
        btnPricelistRef.style.opacity = ".5";
        tablePricelistInit.style.display = "table";
        tablePricelistRef.style.display = "none";
        btnPricelistRef.addEventListener("click", priceListSelector);
        btnPricelistInit.removeEventListener("click", priceListSelector);
        btnSwitch2 = true;
    }
}
