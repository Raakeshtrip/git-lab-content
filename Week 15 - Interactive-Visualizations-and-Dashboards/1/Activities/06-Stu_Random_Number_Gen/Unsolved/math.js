// @TODO: Complete the following sections to create a lottery number generator.


// Create an empty array to add the numbers.

var lottery=[]


// Create a for loop to generate 5 random numbers between 1 and 59.

for(i=0; i <5; i+=1)
{ console.log(Math.ceil(Math.random() * 59));lottery[i]=Math.round(Math.random() * 59)};console.log(lottery)


//  Check your numbers.
console.log(lottery);

lottery[5]=Math.round(Math.random() * 35)

//Bonus: Add a 6th number to the array between 1 and 35.
// for(i=0; i < 1; i+=1)
// { console.log(Math.round(Math.random() * 35));
// lottery[5]=Math.round(Math.random() * 35)
// };
// console.log(lottery)
