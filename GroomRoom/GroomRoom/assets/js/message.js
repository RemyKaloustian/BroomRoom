
var talk = "main";

    function InsertMessage() {
        console.log("In InsertMessage()");
        $.get('insert_message.php?message=' + message + '&author=' + username + '&talk=' + talk, function (data) {
            alert(data);
        });


        //$.ajax({
        //    data: data,
        //    type: "get",
        //    url: "insert_message.php?message=" + message + "&author=" + username + "&talk=" + talk,
        //    success: function (data) {
        //        alert("Data Save: " + data);
        //    }
        //});

    }//InsertMessage()

    function InsertMessageXML() {


    }//InsertMessagesXML()


    function SelectMessages() 
    {
        console.log("Selecting messages");
        console.log("Talk = " + talk);


        //e.preventDefault();

        $.ajax(
                    {
                        url: "select_messages.php",
                        type: "GET",
                        data: "talk=" + talk,
                        //Si l'insertion marche, le commentaire est retourné et est affiché afin que la publication soit dynamique
                        success: function (html) {
                            alert(html);
                            console.log("In success");
                            $("#message_box").prepend(html)
                        },

                        error: function (html) {
                            alert(html);
                            console.log("In error");
                            $("#message_box").prepend(html)
    
        }

                    });//ajax()

        //$.get('select_messages.php?talk=' + talk, function (data) {
        //    console.log(data);

        //    alert(data);

    }//SelectMessages()


