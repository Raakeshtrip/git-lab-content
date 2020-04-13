// Sort the data by Greek search results

var sortedByGreekSeacrh=data.sort((a,b)=> b.greekSearchResults - a.greekSearchResults);


// Slice the first 10 objects for plotting

var ReverseSorted = sortedByGreekSeacrh.slice(0, 10);

var reversedata=ReverseSorted//.reverse();

console.log(ReverseSorted);

// Reverse the array to accommodate Plotly's defaults

var Trace1={
    x: reversedata.map(row => row.greekSearchResults),
    y: reversedata.map(row => row.greekName),
    name: reversedata.map(row => row.greekName),
    type: "bar",
    orientation:"h"
}


var data = [Trace1]
var layout={
    title: "Greek God Search" 
    }

Plotly.newPlot("plot", data, layout)

// Trace1 for the Greek Data

// data

// Apply the group bar mode to the layout

// Render the plot to the div tag with id "plot"
