var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

// // @TODO: Complete the Following Steps

// // Create the Trace

// var trace = {x: eyeColor,
//              y: eyeFlicker,
//              type: "bar"
//             }

// var layout = {
//   title: " Eye Color Chart",
// };

// // Create the data array for our plot

// var data=[trace]

// // Define our plot layout




var trace = {labels: eyeColor,
             values: eyeFlicker,
             type: "pie"
            };



var layout = {
  title: " Eye Color Chart"
};


var data=[trace] ;
// Create the data array for our plot



// // Define our plot layout


// Plot the chart to a div tag with id "bar-plot"

Plotly.newPlot("bar-plot", data, layout);