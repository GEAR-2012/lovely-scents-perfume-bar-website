// NEW PRICES
// get all tr in pricelist table
let priceLsTable = document.querySelectorAll(".table.pricelist.init>tbody>tr");

let newPriceArr = ["4.90", "4.50", "7.50", "9.90", "14.90", "17.50", "20.50"];

// this loop is add a new prices next to the old ones
priceLsTable.forEach((elem, i) => {
  let newTd = document.createElement("td");
  let text = "£";
  text += newPriceArr[i];
  let txtNode = document.createTextNode(text);
  newTd.appendChild(txtNode);
  elem.appendChild(newTd);
});
