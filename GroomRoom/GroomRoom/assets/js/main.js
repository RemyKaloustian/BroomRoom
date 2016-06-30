
//SUPER USEFUL STUF IS DONE HERE

var username = "Some douche";

var message = "";




$(document).ready(function () {

    $("#logp").text("logged as " + username);

    //Getting the messages from the talk at the beginning
    SelectMessages();

    //Refreshing the messages every 2 seconds
    setInterval(function () { RefreshMessages(); }, 2000);

});//ready()