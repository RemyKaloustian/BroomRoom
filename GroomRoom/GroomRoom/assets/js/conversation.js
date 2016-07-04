

function InsertConversation(newtalk)
{
    _newTalk = newtalk;
    console.log("In InsertConversation");
    $.ajax(
                   {
                       url: "insert_talk.php",
                       type: "GET",
                       data: "newtalk=" + newtalk,

                       success: function (html) {
                           //console.log("Insertion great !")
                           SetTalk(_newTalk);
                           SetId(0);
                           CleanMessages();
                           SetTitle();
                       },

                       error: function (html) {
                           //alert(html);
                           console.log("In error");

                       }
                   });//ajax()
}