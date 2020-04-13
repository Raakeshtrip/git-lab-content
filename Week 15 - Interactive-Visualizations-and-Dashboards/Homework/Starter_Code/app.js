function init(){
     var dropDown = d3.select("#selDataset");
     d3.json("samples.json").then((data) => {
         var firstId = data.names[0];
         // Populate the dropdown with subjectIDs
         data.names.forEach((id) => {
             dropDown
                 .append("option")
                 .text(id)
                 .property("value",id);
         });
         // Refresh page with data from firstId
         optionChanged(firstId);

     });
  };


  function optionChanged(id){
     d3.json("samples.json").then((data) => {
         var metadata = data.metadata.filter(function(metadata){
             return metadata.id == id;
         });
         var samples = data.samples.filter(function(samples){
             return samples.id == id;
         });
         // Update the sample-metadata
         var samplePanel = d3.select("#sample-metadata");
         samplePanel.html("");
         Object.entries(metadata[0]).forEach(([key, value]) => {
             samplePanel.append("p").text(`${key}:${value}`)
         });
         // * Use sample_values as the values for the bar chart.
         var sampleValues = samples[0].sample_values;
         // * Use otu_ids as the labels for the bar chart.
         var otuIds = samples[0].otu_ids;
         //* Use otu_labels as the hovertext for the chart.
         var otuLabels = samples[0].otu_labels;
        
         console.log(metadata[0].wfreq);
     
         buildGauge(metadata[0].wfreq);

         var trace1 = {
             x: sampleValues.slice(0,10).reverse(),
             y: otuIds.slice(0,10).map(function(e){return "OTU " + e.toString()}).reverse(),
             hovertext: otuLabels.slice(0,10).reverse(),
             orientation: "h",
             hoverinfo: "text",
             type: "bar"
           };
         var bardata = [trace1];
         Plotly.newPlot("bar", bardata);
         var trace2 = {
             // * Use otu_ids for the x values.
             x: otuIds,
             // * Use sample_values for the y values.
             y: sampleValues,
             // * Use sample_values for the marker size.
             // * Use otu_ids for the marker colors.
             mode: "markers",
             marker:{
               size: sampleValues,
               color: otuIds
             },
             // * Use otu_labels for the text values.
             text: otuLabels
             };
         bubbleData = [trace2];
         var bubbleLayout = {
               xaxis:{title: "OTU ID"}
             };
         Plotly.newPlot("bubble", bubbleData, bubbleLayout);
     });
  };

  

  function buildGauge(WFREQ) {
     // Enter the Washing Frequency Between 0 and 180
     let level = parseFloat(WFREQ) * 20;
 
     // Trigonometry to Calculate Meter Point
     let degrees = 180 - level;
     let radius = 0.5; 
     let radians = (degrees * Math.PI) / 180;
     let x = radius * Math.cos(radians);
     let y = radius * Math.sin(radians);
 
     // Path May Have to Change to Create a Better Triangle
     let mainPath = "M-.0 -0.05 L  .0 0.05 L";
     let pathX = String(x);
     let space = " ";
     let pathY = String(y);
     let pathEnd = " Z";
     let path = mainPath.concat(pathX, space, pathY, pathEnd);
     console.log(path);
     let data = [
         {
             type: "scatter",
             x:[0],
             y:[0],
             marker: { size: 12, color: "850000" },
             showlegend: false,
             text: level,
             hoverinfo: "text+name"
         },
         {
             values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
             rotation: 90,
             text:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
             textinfo: "text",
             textposition: "inside",
             marker: {
                 colors: [
                     "rgba(0,105,11,.5)",
                     "rgba(10,120,22,.5)",
                     "rgba(14,127,0,.5)",
                     "rgba(110,154,22,.5)",
                     "rgba(170,202,42,.5)",
                     "rgba(202,209,95,.5)",
                     "rgba(210,206,145,.5)",
                     "rgba(232,226,202,.5)",
                     "rgba(240, 230,215,.5)",
                     "rgba(255,255,255,0)"
                 ]
             },
             labels:["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
             hoverinfo: "label",
             hole: 0.5,
             type: "pie",
             showlegend: false
         }
     ]
 
     var layout = {
         shapes: [
             {
                 type: "path",
                 path: path,
                 fillcolor: "850000",
                 line: {
                     color: "850000"
                 }
             }
         ],
         title: "Belly Button Washing Frequency <br> Scrubs per Week",
         height: 500,
         width: 500,
         xaxis: {
             zeroline:false,
             showticklabels: false,
             showgrid: false,
             range: [-1, 1]
         },
         yaxis: {
             zeroline: false,
             showticklabels: false,
             showgrid: false,
             range: [-1, 1]
         }
     }
     let GAUGE = document.getElementById("gauge");
     Plotly.newPlot(GAUGE, data, layout);
 }


  init();

