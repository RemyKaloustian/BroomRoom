<?php

//SELECTING MESSAGES   

 require 'dbconnect.php';

    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    $id="0";

    if($_GET['talk'] != "")
    {

        $request = $bdd->prepare('SELECT ID,AUTHOR,CONTENT FROM MESSAGE WHERE TALK = :talk');
        $request->execute(array("talk"=>$_GET['talk']));        
        
        while($data = $request->fetch(PDO::FETCH_ASSOC))
        {
            echo' <div class="message_box">
                            <p class="author"> '.$data['AUTHOR'].'</p>'.$data['CONTENT'].
                        '</div><br>';

            $id = $data['ID'];
            
        }       

        echo  '<p class="lastId"> '.$id.'</p>';
       
   }             
        
?>  
        

   