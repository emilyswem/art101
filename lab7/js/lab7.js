// index.js - create mixed up names
// Author: Emily Swem and Cristalyn Murray
// Date: 10/28/24

//sortUserName - a funtion that takes user input and sorts the letters of their name
function sortUserName () {
    var userName = window.propmt ("Hey diva! Gimme ur name and I'll give you something new");
    console.log ("userName=", userName);
    //split the string to array
    var nameArray = user.Name.split('');
    console.log ("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort ();
    //join array back to a string
    var nameSorted = nameArraySort.join ('');
    console.log ("nameSorted=", nameSorted);
    return nameSorted;
}

//output
document.writeln("Hey girlie, new nickname:")
    sortUserName(), "</br";