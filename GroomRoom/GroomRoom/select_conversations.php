<?php

//SELECTING CONVERSATIONS   

//Connecting to teh database
require 'dbconnect.php';

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');



    //Selecting id, author and content of messages from the corresponding talk
    $request = $bdd->prepare('SELECT NAME FROM CONVERSATION ');
    $request->execute();        
    
    //Going through the rows
    while($data = $request->fetch(PDO::FETCH_ASSOC))
    {
        //Displaying the messages box with the messages content and author
        echo' <button class="switch_button hvr-underline-from-left"> '.$data['NAME'].'</button><br>';

      
    }      

?>  
        

   