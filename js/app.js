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

// build a filter that detects a user clicking a button
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");

    // create a default data variable
    let filteredData = tableData;
    
    // use if statement to pull rows that match filter value
    if (date) {
        filteredData = filterData.filter(row => row.datetime === date);
    };
    
    // call the buildTable function using filtered data
    buildTable(filteredData);
}

// Attach an event to listne for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);