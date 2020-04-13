
// YOUR CODE HERE
// var greekname=[]
// var greeksearh=[]

// create function for greekgod
function greekgodname (greekgod) 
{
 return   greekgod.greekName;
}

function greekgodsearch (greeksearch) 
{
 return  greekgod.greekSearchResults;
}

//Filter the data for grrek god
var greeknames=data.filter(greekgodname);

console.log(greeknames);

var greekgod=greeknames.map(greek =>greek.greekName )

//  Check your filtered cities
console.log(greekgod)


var greeksearch=greeknames.map(greek =>greek.greekSearchResults )

//  Check your filtered cities
console.log(greeksearch)

// Romans
function romangodname (romangod) 
{
 return   romangod.romanName;
}

function romangodsearch (romangod) 
{
 return  romangod.romanSearchResults;
}

//Filter the data for grrek god
var romannames=data.filter(romangodname);

console.log(romannames);

var romangod=romannames.map(roman =>roman.romanName )

//  Check your filtered cities
console.log(romangod)


var romansearch=romannames.map(roman =>roman.romanSearchResults )

//  Check your filtered cities
console.log(romansearch)



//Trace 
Trace1={
        x: data.row(row => row.pair),
        y:  data.row(row => row.romanSearchResults),
        text: data.map(row => row.romanName),
        type:"bar"
}


//Trace 
Trace2={
    x: data.row(row => row.pair),
    y:  data.row(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    type:"bar"
}

var data = [Trace1,Trace2];

var layout ={
    title: "Greek vs Roman",
    barmode: "stack"
}

plotly.newPlot("plot",data,layout);

