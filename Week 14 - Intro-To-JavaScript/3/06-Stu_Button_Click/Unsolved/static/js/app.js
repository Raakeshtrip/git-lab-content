// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

var upvote=d3.select(".upvote");
var Downvote=d3.select(".downvote");

var counter=d3.select(".counter");

 upvote.on("click",function()
 {
  var currentcounter = parseInt(counter.text());
  currentcounter +=1;
  console.log(currentcounter);
  counter.text(currentcounter);
})



Downvote.on("click",function()
{
 var currentcounter = parseInt(counter.text())
 currentcounter -=1;
 console.log(currentcounter);
 counter.text(currentcounter);
})


// Select the upvote and downvote buttons

// Select the counter h1 element

// Use D3 `.on` to attach a click handler for the upvote

// Use d3 `.on` to attach a click handler for the downvote
