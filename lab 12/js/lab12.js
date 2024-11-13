// lab 9 - Art 101 with Wes Modes
// Author: Emily Swem and Cristalyn Murray
// Date: 11/13/24

//Return Vanilla Latte, Pumpkin Spice Latte, Peppermint Mocha Latte, Chai Latte
// depending on length mod 4 
function coffeeOrder(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "Vanilla Latte"
    }
    else if (mod == 1) {
      return "Pumpkin Spice Latte"
    }
    else if (mod == 2) {
      return "Peppermint Mocha Latte"
    }
    else if (mod == 3) {
      return "Chai Latte"
    }
  }

  var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  var order = coffeeOrder(name);
  newText = "<p>here's your order!>" + order + "</p>";
  document.getElementById("output").innerHTML = newText;
})