// @TODO: YOUR CODE HERE
// Trace1={
//     y: temps.newyork,
//     type:"box"
// }


// Trace2={
//     y: temps.houston,
//     type:"box"
// }



// Trace1={
//     y: data.survival,
//     type:"box"
// }


Trace2={
    x: data.organ,
    y: data.survival.map(val=>Math.sqrt(val)),
    type:"box",
    boxpoints:"all"
}


data=[Trace2];

var layout={
    title: "Rakesh Box Plot"
}


Plotly.newPlot("plot", data, layout);

