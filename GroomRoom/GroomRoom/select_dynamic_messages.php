<?php

//SELECTING MESSAGES   

//Connecting to teh database
require 'dbconnect.php';

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

//Setting the id of the last message(if no messages to pick, 0 is still  a correct value)
$id=$_POST["id"];

//If the talk is set
if($_POST['talk'] != "")
{

    //Selecting id, author and content of messages from the corresponding talk, where the id is superior to the last displayed message
   
     $request = $bdd->prepare('SELECT ID,AUTHOR,CONTENT FROM MESSAGE WHERE TALK = :talk AND ID > :id');
    $request->execute(array("talk"=>$_POST['talk'],"id"=>$_POST['id']   ));        

    //$request = $bdd->prepare('SELECT ID,AUTHOR,CONTENT FROM MESSAGE WHERE TALK = :talk AND ID > :id');
    //$request->execute(array("talk"=>$_POST['talk'],"id"=>$_POST['id']   ));        
    
    //Going through the rows
    while($data = $request->fetch(PDO::FETCH_ASSOC))
    {
        print_r($data);
        //Displaying the messages box with the messages content and author
        echo' <div class="message_box">
                            <p class="author"> '.$data['AUTHOR'].'</p>'.$data['CONTENT'].
        '</div><br>';

        //Setting the last id
        $id = $data['ID'];
        
    }       

    //is used to transmit the last id to the client side.
    echo  '<p id="lastId">'.$id.'</p>';
    
}             

?>  
        

   