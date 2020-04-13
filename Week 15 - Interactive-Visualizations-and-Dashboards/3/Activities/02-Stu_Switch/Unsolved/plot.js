// Initializes the page with a default plot

var dataset1 = [1,2,3,4,5,6,7] ;
var dataset2 =[4,5,6,7,8,9];
var dataset3 = [1,6,8,9,10,11,12,14];

var x=[1,2,4,5,6,7,8,9,10,11,12,13,14]

function init() {
  var data = [{
    x: x,
    y: dataset1,
    type: "line"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("plot", data, layout);
}

d3.selectAll("#selDataset").on("change", updatePlotly);
// Call updatePlotly() when a change takes place to the DOM
function updatePlotly() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'dataset1') {
      data = dataset1;
  }
  else if (dataset == 'dataset2') {
      data = dataset2;
  }
  else if (dataset == 'dataset3') {
      data = dataset3;
  }
  // Call function to update the chart
  Plotly.restyle("plot", "y", [data]);
}


// This function is called when a dropdown menu item is selected

  // Use D3 to select the dropdown menu

  // Assign the value of the dropdown menu option to a variable


  // Initialize x and y arrays



  // Note the extra brackets around 'x' and 'y'


  init()