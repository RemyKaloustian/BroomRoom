<?php

//SELECTING MESSAGES   

//Connecting to teh database
 require 'dbconnect.php';

    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    //Setting the id of the last message(if no messages to pick, 0 is still  a correct value)
    $id="0";

    //If the talk is set
    if($_GET['talk'] != "")
    {

        //Selecting id, author and content of messages from the corresponding talk
        $request = $bdd->prepare('SELECT ID,AUTHOR,CONTENT FROM MESSAGE WHERE TALK = :talk');
        $request->execute(array("talk"=>$_GET['talk']));        
        
        //Going through the rows
        while($data = $request->fetch(PDO::FETCH_ASSOC))
        {
            //Displaying the messages box with the messages content and author
            echo' <div class="message_box">
                            <p class="author"> '.$data['AUTHOR'].'</p>'.$data['CONTENT'].
                        '</div><br>';

            //Setting the last id
            $id = $data['ID'];
            
        }       

        //is used to transmit the last id to the client side.
        echo  '<p id="lastId"> '.$id.'</p>';
       
   }             
        
?>  
        

   