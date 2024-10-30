// lab 8
// Author: Emily Swem and Cristalyn Murray
// Date: 10/30/24

function isEven (x){
    return (x % 2 == 0)
}

//test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [1129, 2004, 1126, 1974, 129, 10]
console.log("My array", array);

var result = array.map (isEven);
console.log ("Testing evenness of array:", result);

var result = array.map(function(x){
    return x * 0.5;
})
console.log("Half of array:",result);