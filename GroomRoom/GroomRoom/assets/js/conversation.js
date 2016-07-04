

function InsertConversation(newtalk)
{
    console.log("In InsertConversation");
    $.ajax(
                   {
                       url: "insert_talk.php",
                       type: "GET",
                       data: "newtalk=" + newtalk,

                       success: function (html) {
                           console.log("Insertion great !")
                       },

                       error: function (html) {
                           //alert(html);
                           console.log("In error");

                       }
                   });//ajax()
}