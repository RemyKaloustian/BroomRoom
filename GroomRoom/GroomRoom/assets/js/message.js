
var _talk = "main";

//Inserts a message in the database
function InsertMessage()
{
        $.get('insert_message.php?message=' + _message + '&author=' + _username + '&talk=' + _talk, function (data)
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
                        data: "talk=" + _talk,
                       
                        success: function (html) 
                       { 
                            //alert(html);
                            $("#message_box").prepend(html);
                            AddColorAfterRefresh();
                            AddMarginBottom();
                            TreatLastId();
                            CheckImagesAfterSelect();

                            //ScrollToLastMessage();
                        },

                        error: function (html)
                        {
                            //alert(html);
                            console.log("In error");
    
                        }
                    });//ajax()

    }//SelectMessages()

    function RefreshMessages()
    {
        //console.log("Refreshing the messages");
        console.log("In RefreshMessages(),  talk = " + _talk + " , _lastId = " + _lastId);
        $.ajax(
                    {
                        url: "select_dynamic_messages.php",
                        type: "POST",
                        data: {
                            talk: _talk,
                            id: _lastId
                        },

                        success: function (html) {
                            console.log("In success");
                            // alert(html);      
                            RemoveMarginBottom();

                            $("#message_box").append(html);
                            AddColorAfterRefresh();
                            AddMarginBottom();
                            TreatLastId();
                            CheckImagesAfterSelect();

                            //console.log("LENGTH : " + html.length);

                            var messagebox = "message_box";
                            if (html.indexOf(messagebox) != -1)
                            {
                                ScrollToLastMessage();
                            }
                        },

                        error: function (html) {
                            //alert(html);
                            console.log("In error");

                        }
                    });//ajax()
    }//RefreshMessages()


