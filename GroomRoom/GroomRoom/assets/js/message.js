
var talk = "main";

function InsertMessage()
{
        console.log("In InsertMessage()");
        $.get('insert_message.php?message=' + message + '&author=' + username + '&talk=' + talk, function (data)
        {
           // alert(data);
        });


    }//InsertMessage()

function AddMarginBottom()
{
    $(".message_box").last().addClass("last_message");

}//AddMarginBottom()

function RemoveMarginBottom()
{
    $(".message_box").last().removeClass("last_message");

}//RemoveMarginBottom()

function ScrollToLastMessage()
{
    var the_id = $(".message_box").last(); //Locating the last message

    $('html, body').animate( //-->Animating the scroll
    {
        scrollTop: $(the_id).offset().top
    }, 'slow');
}




    function SelectMessages() 
    {
        console.log("Selecting messages");
        console.log("Talk = " + talk);

        $.ajax(
                    {
                        url: "select_messages.php",
                        type: "GET",
                        data: "talk=" + talk,
                       
                        success: function (html) 
                       { 
                            alert(html);
                            console.log("In success");
                            $("#message_box").prepend(html)
                            AddMarginBottom();
                        },

                        error: function (html)
                        {
                            alert(html);
                            console.log("In error");
    
                        }
                    });//ajax()

    }//SelectMessages()


