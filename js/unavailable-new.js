const unavailablePerfumes = []; // perfume number list of unavailable perfumes
const newPerfumes = [112, 139, 150, 178, 179, 180, 181, 296, 297]; // perfume number list of new perfumes

// get all rows in perfumelist tables
const rows = document.querySelectorAll("table.table.parlist tr");

for (let row of rows) {
    unavailablePerfumes.forEach((perfNo) => {
        if (row.firstElementChild.innerText == perfNo) {
            row.classList.add("unavailable");
            row.setAttribute("title", "Currently do not available.");
        }
    });
    newPerfumes.forEach((perfNo) => {
        if (row.firstElementChild.innerText == perfNo) {
            row.classList.add("new");
            row.setAttribute("title", "New Perfume.");
        }
    });
}
