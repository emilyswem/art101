// lab 9
// Author: Emily Swem and Cristalyn Murray
// Date: 11/4/24

//generate fake dialogue
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
    $("#make-convo").click(function(){
            // get new fake dialogue
            const newText = generateRandomText();
            // append a new div to our output div
            $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    });