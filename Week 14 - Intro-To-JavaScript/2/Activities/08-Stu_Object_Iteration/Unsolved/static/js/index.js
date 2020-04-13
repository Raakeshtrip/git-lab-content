// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE=

var dishes=[]
var spices=[]


recipes.forEach((rec) => {
  console.log(rec);

  // Get the entries for each object in the array
  Object.entries(rec).forEach(([key, value]) => {
    // Log the key and value
    if (key==='dish')
    {
      dishes.push(value)
    }
    else 
    {
      spices.push(value)
    }
    console.log(`Key: ${key} and Value ${value}`);
  });
});

console.log(dishes)

console.log(spice)



// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

// @TODO: YOUR CODE HERE=

var dishes=[]
var spices=[]


recipes.forEach((rec) => {
  console.log(rec);

  // Get the entries for each object in the array
  Object.entries(rec).forEach(([key, value]) => {
    // Log the key and value
    if (key==='dish')
    {
      dishes.push(value)
    }
    else 
    {
      spices.push(value)
    }
    console.log(`Key: ${key} and Value ${value}`);
  });
});

console.log(dishes)

console.log(spices)

