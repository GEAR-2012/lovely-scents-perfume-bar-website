const unavailablePerfumes = [142, 148];

// get all rows in perfumelist tables
const rows = document.querySelectorAll("table.table.parlist tr");

for (let row of rows) {
  unavailablePerfumes.forEach((perfNo) => {
    if (row.firstElementChild.innerText == perfNo) {
      row.classList.add("unavailable");
    }
  });
}
