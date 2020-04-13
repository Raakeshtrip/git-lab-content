var apiKey = "4unkgxR-y3kxBLCDohxw";

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;




/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} data
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(data, index) 
{
  return data.map(
    function(row) 
  {
    // console.log("My Data",row[index]);
    return row[index];
  });
}




/**
 * Fetch data and build the timeseries plot
 */
function buildPlot() {
  // @TODO: YOUR CODE HERE
  d3.json(url).then(function(data) {

  var name=data.dataset.name;
  var stock=data.dataset.dataset_code;
  var start_date=data.dataset.start_date;
  var end_date=data.dataset.end_date;
  var dates=unpack(data.dataset.data,0);
  var closingprices=unpack(data.dataset.data,2);
  
  var trace1={
    type: "scatter",
    mode: "lines",
    x:dates,
    y: closingprices,
    line: {
      color: "#17BEFC"
    }
  };
  var data=[trace1];

  var layout={
    title: stock,
    xaxis:{
      range: [start_date,end_date]
      , type: "date"
    },
    yaxis:{
      autorange: true ,
      type : "linear"
    }
    
}

Plotly.newPlot("plot", data, layout)
});
};






buildPlot();
