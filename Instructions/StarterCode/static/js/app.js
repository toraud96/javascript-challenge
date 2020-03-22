// Get a reference to the table body
var tbody = d3.select("tbody");

//Bringing the information to the html to be put in a table
data.forEach(function(eyeWitness) {
    console.log(eyeWitness);
    var row = tbody.append("tr");
    Object.entries(eyeWitness).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the eye witness report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
    
//break might happen after this comment

// Assign the data from `data.js` to a descriptive variable
// var tbody = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.datetime === inputValue);

  console.log(filteredData);