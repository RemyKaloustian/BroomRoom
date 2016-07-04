var popup //The login popup
var talk_popup //The conversation popup
var newtalk_popup // The new conversation popup


//IS USED TO MAKE A RESPONSIVE DESIGN
$(document).ready(function () {

    //Popup for login
    popup = $('[data-remodal-id=popup]').remodal();
    talk_popup = $('[data-remodal-id=talk_popup]').remodal();
    newtalk_popup = $('[data-remodal-id=newtalk_popup]').remodal();


    /**
     * Opens the modal window
     */
    popup.open();

    $("#container").css("marginTop", $("header").height().toString() + "px");

    $("#pics_box").css("display", "none");
    SetUpPicBox();


});

function SetUpPicBox()
{
    console.log("In SetUpPicBox");
    console.log("header.height = " + $("header").height().toString());
    //$("#pics_box").css("display", "block");

    $("#pics_box").css("width", ($(window).width() * 0.3).toString() + "px");
    $("#pics_box").css("top", $("header").height().toString() + "px");
    $("#pics_box").css("left", ($(window).width() - $("#pics_box").width()).toString() + "px");
}//SetUpPicBox()

function UnsetPicBox()
{
    $("#pics_box").css("width", 0+ "px");
    $("#pics_box").css("top", 0 + "px");
    $("#pics_box").css("left", 0 + "px");
    //$("#pics_box").css("display", "none");
}