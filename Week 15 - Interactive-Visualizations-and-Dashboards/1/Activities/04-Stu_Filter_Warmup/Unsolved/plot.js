// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.

function filtercity(city) {
    return city.Increase_from_2016 > 15000;
  }


// 2. Use filter() to pass the function as its argument
var filteredCities=top15Cities.filter(filtercity);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filteredCities)

// 3. Use the map method with the arrow function toIncrease_from_2016 return all the filtered cities' names.
var citesnames=filteredCities.map(cities =>cities.City )

//  Check your filtered cities
console.log(citesnames)

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var citespopulation=filteredCities.map(cities =>cities.Increase_from_2016/cities.population * 100)


//  Check the populations of your filtered cities

console.log(citespopulation)

// 5. Create your trace.

trace={
    x:citesnames,
    y:citespopulation,
    type: 'bar'
}

// 6. Create the data array for our plot
var data=[trace]

// 7. Define our plot layout
layout={
    title: "city population "
}

// 8. Plot the chart to a div tag with id "bar-plot"

Plotly.newPlot("bar-plot", data, layout);