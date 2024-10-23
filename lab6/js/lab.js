// index.js - purpose and description here
// Author: Emily Swem and Cristalyn Murray
// Date: 10/23/2024

// Define Variables
const myTransport = ["car", "bus", "walk", "rideshare", "plane"];

//create an object for my main ride
var myMainRide = {
   make: "Subaru",
   model: "Forester",
   color: "Silver",
   year: "2018",
   age: function() {
      return 2024 - this.year;
   }
}

//output
document.writeln ("Kinds of transportation I use:", myTransport, "<br>");
document.writeln ("My Main Ride: <pre>",
  JSON.stringify (myMainRide, null, '\t'), "</pre>";
)