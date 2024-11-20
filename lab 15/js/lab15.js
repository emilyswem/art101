// lab 15 - Art 101 with Wes Modes
// Author: Emily Swem and Cristalyn Murray
// Date: 11/20/24
//cred to Wes for code :D

{
    "id"="pictures",
    "width"=1204,"height"=1445,
    "url"="https://api.thecatapi.com/v1/images/search?limit=10",
    "breeds"=[{
        "weight":{"imperial":"7  -  10","metric":"3 - 5"},
        "id":"abys","name":"Abyssinian",
        "temperament":"Active, Energetic, Independent, Intelligent, Gentle",
        "origin":"Egypt",
        "country_codes":"EG",
        "country_code":"EG",
        "life_span":"14 - 15",
        "wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)"
    }]
    }
    
// attach click action to button
$('#action').click(function(){
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
        // $("#output").append("<p>" + JSON.stringify(data));
        // $("#output").append("<p>Here's what you should do when you are bored: <b>" + data.activity);
        // $("#output").append(printableData);
        // $("#output").append("<p>The most stable smart man in the room says: <b>" + data.quote);
        $("#title").html(data.title)
        $("#output").append("<img src=" + data.url + ">");
        $("#output").append("<p>" + data.explanation);

    })
});