// Create an array of each country's numbers
// var us = Object.entries(data.us);
// var uk = Object.values(data.uk);
// var canada = Object.values(data.canada);
// console.log(us)

var labels= Object.keys(data.us)

function init() {
    data1 = [{
    values: Object.values(data.us),
    labels:labels,
    type: "pie"  }];
  
    Plotly.newPlot("pie", data1);
  }


  d3.selectAll("#selDataset").on("change", updatePlotly);

  function updatePlotly() {

    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];

  
    if (dataset === 'us') 
    {
        values= Object.values(data.us)
    }
  
    if (dataset === 'uk') 
    {
        values= Object.values(data.uk)
    }
    if (dataset === 'canada') 
    {
        values= Object.values(data.canada)
    }

    Plotly.restyle("pie", "values",[values]);
console.log(values)
  }

  

// @ADD YOUR CODE HERE



init();