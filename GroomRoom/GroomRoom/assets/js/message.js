
var talk = "main";

//Inserts a message in the database
function InsertMessage()
{
        $.get('insert_message.php?message=' + message + '&author=' + username + '&talk=' + talk, function (data)
        {
            //alert(data);
        });


    }//InsertMessage()

//Used to make space between the last message and the input box
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
}//ScrollToLastMessage()

//Selects the message at the loading of the page
    function SelectMessages() 
    {

        $.ajax(
                    {
                        url: "select_messages.php",
                        type: "GET",
                        data: "talk=" + talk,
                       
                        success: function (html) 
                       { 
                            //alert(html);
                            $("#message_box").prepend(html)
                            AddMarginBottom();
                            TreatLastId();
                            //ScrollToLastMessage();
                        },

                        error: function (html)
                        {
                            alert(html);
                            console.log("In error");
    
                        }
                    });//ajax()

    }//SelectMessages()

    function RefreshMessages()
    {
        console.log("Refreshing the messages");
        $.ajax(
                    {
                        url: "select_dynamic_messages.php",
                        type: "POST",
                        data: {
                            talk: talk,
                            id: lastId
                        },

                        success: function (html) {
                            console.log("In success");
                            // alert(html);      
                            RemoveMarginBottom();

                            $("#message_box").append(html);
                            AddMarginBottom();
                            TreatLastId();
                            ScrollToLastMessage();
                        },

                        error: function (html) {
                            alert(html);
                            console.log("In error");

                        }
                    });//ajax()
    }//RefreshMessages()


