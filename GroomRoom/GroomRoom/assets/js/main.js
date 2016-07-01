
//SUPER USEFUL STUF IS DONE HERE

var username = "Some douche";

var message = "";

var lastId = 0;




$(document).ready(function () {

    $("#logp").text("logged as " + username);


    //Getting the messages from the talk at the beginning
    SelectMessages();

    //Refreshing the messages every 2 seconds
    setInterval(function () { RefreshMessages(); 
    }, 1000);

});//ready()


function IncrementLastId()
{
    lastId++;
}//IncrementLastId()


function TreatLastId()
{
    lastId = parseInt($("#lastId").text());
    console.log("lastId is now = " + lastId);
    $("#lastId").remove();
}//TreatLastId()

