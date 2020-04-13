// Create a variable called "name" that holds a string
var name ="Homer Simsons";

// Create a variable called "country" that holds a string
var country="United States";

// Create a variable called "age" that holds an integer
var age=25;

// Create a variable called "hourlyWage" that holds an integer
var hourly_Wage=15;


//Create a variable that holds a number as a string
var weekly_hours = "40";

// Calculate the "dailyWage" for the user
var daily_wage=hourly_Wage * 5;

// Create a variable that holds a number as a string


// Create a variable called 'weeklyWage' that converts a string into an integer

var weekly_wage = hourly_Wage * parseInt(weekly_hours);


// Create a variable called "satisfied" that holds a boolean

var satisfied = true;

// Print out "Hello <name>!"

console.log(`Hello ${name}`)

// Print out what country the user entered

console.log(`You live in ${country}`)

// Print out the user's age

console.log(`Your are ${age} year  old`)

// Print out the daily wage that was calculated

console.log(`you make ${daily_wage}  dollar per day`)

// Print out the weekly wage that was calculated
console.log (`you make ${weekly_wage} dollar per day`)

// Using an IF statement to print out whether the users were satisfied

if (satisfied===true) {
    console.log("you are satisfied")
    
}
else{
    console.log("you are not satisfied")
}
