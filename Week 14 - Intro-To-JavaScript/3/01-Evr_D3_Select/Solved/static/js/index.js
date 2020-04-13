// Select the text of an HTML element
var text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);

var text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);

// Modify the text of an HTML element
d3.select(".text1").text("Hey, I changed this!");

// Capture the HTML of a selection
var myLink = d3.select(".my-link").html();
console.log("my-link: ", myLink);

// Select an element's child element
// An object is returned
var myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

// // Capture the child element's href attribute
var myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);

// Change an element's attribute
myLinkAnchor.attr("href", "https://python.org");

// Use chaining to join methods
d3.select(".my-link>a").attr("href", "https://nytimes.org").text("Now this is a link to the NYT!!");

// Select all list items, then change their font color
d3.selectAll("li").style("color", "blue");

// Create a new element
var li1 = d3.select("ul").append("li");
li1.text("A new item has been added!");

// Use chaining to create a new element and set its text
var li2 = d3.select("ul").append("li").text("Another new item!");
