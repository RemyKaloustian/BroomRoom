var popup //The login popup


//IS USED TO MAKE A RESPONSIVE DESIGN
$(document).ready(function () {

    //Popup for login
    popup = $('[data-remodal-id=modal]').remodal();

    /**
     * Opens the modal window
     */
    popup.open();

    $("#container").css("marginTop", $("header").height().toString() + "px");

    SetUpPicBox();


});

function SetUpPicBox()
{
    console.log("In SetUpPicBox");
    console.log("header.height = " + $("header").height().toString());
    $("#pics_box").css("width", ($(window).width() * 0.3).toString() + "px");
    $("#pics_box").css("top", $("header").height().toString() + "px");
    $("#pics_box").css("left", ($(window).width() - $("#pics_box").width()).toString() + "px");
}//SetUpPicBox()