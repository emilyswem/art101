// create mixed up names
// Author: Emily Swem and Cristalyn Murray
// Date: 10/28/24


//get string from user, sort a string, return a sorted string
function sortStr() {
    let userName = window.prompt ("hey diva! what's ur name?");
    return userName.split("").sort().join("");
}


//call the function and print results to html doc
document.writeln(sortStr());