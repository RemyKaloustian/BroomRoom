
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


    function SelectMessages() {
        console.log("Selecting messages");
        console.log("Talk = " + talk);

        $.get('select_messages.php?talk=' + talk, function (data) {
            console.log(data);

            alert(data);
        })

    }//SelectMessages()


