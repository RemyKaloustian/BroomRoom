

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
                           //SetId(0);
                           CleanMessages();
                           SetTitle();
                       },

                       error: function (html) {
                           //alert(html);
                           console.log("In error");

                       }
                   });//ajax()
}//InsertConversation()

function GetConversations()
{
    $.ajax(
                  {
                      url: "select_conversations.php",
                      type: "GET",
                       

                      success: function (html) {
                          //alert(html);
                          $("#switchtalk_popup").empty();
                          $("#switchtalk_popup").append(html);

                          $(".switch_button").each(function () {
                              $(this).click(function () {
                                  switchtalk_popup.close();
                                  SetTalk($(this).text().trim());
                                  CleanMessages();
                                  //SetId(0);
                                  SetTitle();
                                  SelectMessages();
                                  

                              });
                          });
                        

                          //ScrollToLastMessage();
                      },

                      error: function (html) {
                          //alert(html);
                          console.log("In error");

                      }
                  });//ajax()
}//GetConversations