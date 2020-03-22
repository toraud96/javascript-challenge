//from data.js (used day 3 activity 3)
var data=data;
console.log(data);
// Get a reference to the table body
var tbody = d3.select("tbody");

//Bringing the information to the html to be put in a table
data.forEach((eyeWitness) => {
var row = tbody.append("tr");
Object.entries(eyeWitness).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });   
});
//button (used day3 activity 9)
var button=d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("");  

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(witness => witness.datetime === inputValue);

  console.log(filteredData);

  //Revealing data table again with the filtered options
  //I wonder if there's a simpler way to get the filtered table than writing the same code again? 

  filteredData.forEach((filteredEyeWitness) => {
  var row = tbody.append("tr");
  Object.entries(filteredEyeWitness).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});
});
