// @TODO: Complete the Following Steps

// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the cities with a population increase greater than 15,000.

function filterCities(city) {
  return city.Increase_from_2016 > "15000";
}

// 2. Use filter() to pass the function as its argument
var filteredCities = top15Cities.filter(filterCities);

//  Check to make sure your filtered your cities.
console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities.
var cities = filteredCities.map(city => city.City);

//  Check your filtered cities
console.log(cities);

// 4. Use the map method with the arrow function to return all the filtered cities population.
var population = filteredCities.map(city => city.population);

//  Check the populations of your filtered cities
console.log(population);

// 5. Create your trace.
var trace1 = {
  x: cities,
  y: population,
  type: "bar"
};

// 6. Create the data array for our plot
var data = [trace1];

// 7. Define our plot layout
var layout = {
  title: "Cities that added more than 15,000 people in 2017",
  xaxis: { title: "City" },
  yaxis: { title: "2017 Population"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);

// Bonus challenge.
//  Create a chart of the rate of growth (% of 2016 populations) of the filtered cities.
//  Plot the chart to a div tag with id "rate-bar-plot"

// Create an array that has the 2016 population for each of the filtered cities using parseInt().
var pop2016 = filteredCities.map(city => (parseInt(city.population) - parseInt(city.Increase_from_2016)));

// Create an array for the increase in population for each of the filtered cities using parseInt().
var increase = filteredCities.map(city => parseInt(city.Increase_from_2016));

// Create an empty list to hold the population rate that needs to be calculated.
pop_rate = [];

// Use a for loop to handle two different conditions.
// One for iterating through the 2016 population for each of the filtered cities
//  and one for iterating through the increase in population.

for (i=j= 0; i < pop2016.length && j < increase.length; i++, j++) {
  {
    //  Create a variable that calculates the rate by dividing the increase in population by the 2016 population.

    var rate = (parseInt(increase[j])/parseInt(pop2016[i])) * 100

    //  Add the result to the `pop_rate` list.
    pop_rate.push(rate);
  }
}


// Create the second trace.
var trace2 = {
  x: cities,
  y: pop_rate,
  type: "bar"
};

//  Create the data2 array for our plot
var data2 = [trace2];

// Define our plot layout
var layout = {
  title: "Cities that added more than 15,000 people in 2017",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth Rate (%)"}
};

// Plot the chart to a div tag with id "rate-bar-plot"
Plotly.newPlot("rate-bar-plot", data2, layout);
