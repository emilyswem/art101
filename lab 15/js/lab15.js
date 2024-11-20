// lab 15 - Art 101 with Wes Modes
// Author: Emily Swem and Cristalyn Murray
// Date: 11/20/24

    {   "id": "pictures",
        "width": 1204,
        "height": 1445,
        "url": "https://api.thecatapi.com/v1/images/search?limit=10" 
        URL: "https://api.thecatapi.com/v1/images/search?limit=10" 

    }
    
    $('#press').click(function{console.log(click)})
// attach click action to button
$('#press').click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: URL,
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // make our JSON data printable
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        // put data in webpage
        $("#output").append(printableData);
        $("#title").html(data.title)
        $("#output").append("<img src=" + data.url + ">");
        $("#output").append("<p>" + data.explanation);

    })
});