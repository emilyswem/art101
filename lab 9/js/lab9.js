// lab 9
// Author: Emily Swem and Cristalyn Murray
// Date: 11/4/24

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the problems button
$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the results button
$("#button-results").click(function(){
    $("#results").toggleClass("special");
});