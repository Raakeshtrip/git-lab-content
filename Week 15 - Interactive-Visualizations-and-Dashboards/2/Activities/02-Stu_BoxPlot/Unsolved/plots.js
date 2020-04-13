// @TODO: YOUR CODE HERE
Trace1={
    y: temps.newyork,
    name:"New York",
    type:"box"
}


Trace2={
    y: temps.houston,
    name:"Houston",
    type:"box"
}


data=[Trace1,Trace2];

var layout={
    title: "Rakesh Box Plot"
}


Plotly.newPlot("plot", data, layout);
