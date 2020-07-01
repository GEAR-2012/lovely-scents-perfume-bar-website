/* Last modified 01 Jul 2020 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2020 */
// get DOM elements
const btnPricelistInit = document.querySelector(".btn.pricelist.init");
const btnPricelistRef = document.querySelector(".btn.pricelist.ref");
const tablePricelistInit = document.querySelector(".table.pricelist.init");
const tablePricelistRef = document.querySelector(".table.pricelist.ref");
const onsaleText = document.querySelector(".special__offer");
const hr1 = document.querySelector(".hr__1");
// variables
const screenW = window.outerWidth;

//set the initial price table active
if (screenW >= 568) {
    btnPricelistRef.classList.add("btn-fade");
    tablePricelistRef.classList.add("hide");
    btnPricelistInit.addEventListener("click", priceListSelector);
    btnPricelistRef.addEventListener("click", priceListSelector);
    hr1.classList.add("hide");
}

// switch between initial & refill tables
function priceListSelector() {
    btnPricelistInit.classList.toggle("btn-fade");
    btnPricelistRef.classList.toggle("btn-fade");
    tablePricelistInit.classList.toggle("hide");
    tablePricelistRef.classList.toggle("hide");
    onsaleText.classList.toggle("hide");
}
