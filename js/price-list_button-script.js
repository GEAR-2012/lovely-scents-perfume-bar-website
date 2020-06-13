let btnPricelistInit = document.querySelector(".btn.pricelist.init");
let btnPricelistRef = document.querySelector(".btn.pricelist.ref");
let tablePricelistInit = document.querySelector(".table.pricelist.init");
let tablePricelistRef = document.querySelector(".table.pricelist.ref");
let btnSwitch2 = true;//so init active
let x2 = window.innerWidth;

if(x2 >= 1024) {
//settings to init active
btnPricelistInit.style.opacity = "1";
btnPricelistRef.style.opacity = ".5";
tablePricelistInit.style.display = "table";
tablePricelistRef.style.display = "none";
btnPricelistRef.addEventListener("click", priceListSelector);
}



function priceListSelector() {
  if(btnSwitch2 === true) {
    btnPricelistInit.style.opacity = ".5";
    btnPricelistRef.style.opacity = "1";
    tablePricelistInit.style.display = "none";
    tablePricelistRef.style.display = "table";
    btnPricelistInit.addEventListener("click", priceListSelector);
    btnPricelistRef.removeEventListener("click", priceListSelector);
    btnSwitch2 = false;
  } else if(btnSwitch2 === false) {
    btnPricelistInit.style.opacity = "1";
    btnPricelistRef.style.opacity = ".5";
    tablePricelistInit.style.display = "table";
    tablePricelistRef.style.display = "none";
    btnPricelistRef.addEventListener("click", priceListSelector);
    btnPricelistInit.removeEventListener("click", priceListSelector);
    btnSwitch2 = true;
  }
}
