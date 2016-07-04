
//SUPER USEFUL STUFF IS DONE HERE

var _username = "Some douche";

var _message = "";

var _lastId = 0;

var _refreshTime = 500;
var _newTalk = "";

$(document).ready(function ()
{

    $("#logp").text("logged as " + _username);

    //Getting the _messages from the talk at the beginning
    SelectMessages();
    
    $("#pics_box > p").each(function () {
        $(this).css('color', "#" + _color);
    });

    //Refreshing the messages every 2 seconds
    setInterval(function () { RefreshMessages(); 
    }, _refreshTime);

});//ready()


function IncrementLastId()
{
    _lastId++;
}//IncrementLastId()


//Save the last id and removes the paragraph containing its value
function TreatLastId()
{
    _lastId = parseInt($("#lastId").text());
    console.log("lastId is now = " + _lastId);
    $("#lastId").remove();
}//TreatLastId()

function SetId(value)
{
    _lastId = value;
}//SetId


function SetTalk(value)
{
    _talk = value;
}//SetTalk()

function SetTitle()
{
    $("#page_title").text("BroomRoom  //" + _talk);
}//SetTitle();

function CleanMessages()
{
    $("#message_box").empty();
}//CleanMessages()
