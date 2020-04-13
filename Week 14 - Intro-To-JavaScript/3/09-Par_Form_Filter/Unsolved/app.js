// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

// Complete the click handler for the form
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var patientData=d3.select("#patient-form-input")
  // Get the value property of the input element 
  var dataToFilter=patientData.property("value")

  console.log(patientData);
  console.log(dataToFilter);

  // Use the form input to filter the data by blood type

  var filteredData = people.filter(person => person.bloodType === dataToFilter);

  console.log(filteredData);

  var ages = filteredData.map(person => person.age);

  // First, create an array with just the age values

  console.log(ages);


  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  var meanage=math.mean(ages);
  var medianage=math.median(ages);
  var modeage=math.mode(ages);
  var varage=math.var(ages);
  var stdage=math.std(ages);

  console.log(meanage);
  console.log(medianage);
  console.log(modeage);
  console.log(varage);
  console.log(stdage);

  // BONUS: Calculate summary statistics for the age field of the filtered data


  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
});
