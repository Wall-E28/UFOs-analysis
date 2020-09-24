// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.slect("tbody");


// build a table using the data 
function buildTable(data) {
    
    // clear existing data
    tbody.html("");
    
    // loop there each object in data and append a row 
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        
        // loop there each row and append a value to each cell
        Object.values(dataRow).forEach((val) => {
            let cell = tbody.append("td");
            cell.text(val);
        }); 
    });
}