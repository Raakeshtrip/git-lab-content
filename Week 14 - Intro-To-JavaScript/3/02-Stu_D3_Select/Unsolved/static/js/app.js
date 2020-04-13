// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
d3.select("table").attr("class","table table-striped");

d3.select("tbody").append("tr").append("td").text(newGrade[0])

d3.select("tbody").append("tr").append("td").text(newGrade[1])



// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body

// Append one table row `tr` to the table body

// Append one cell for the student name

// Append one cell for the student grade
