// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select('tbody');

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append('tr');
        // Loow through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((cal) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}