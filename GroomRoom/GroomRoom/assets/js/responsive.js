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


});