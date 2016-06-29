<?php

//SELECTING MESSAGES   

 require 'dbconnect.php';

    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    if($_GET['talk'] != "")
    {

        $request = $bdd->prepare('SELECT AUTHOR,CONTENT FROM MESSAGE WHERE TALK = :talk');
        $request->execute(array("talk"=>$_GET['talk']));        
        
        while($data = $request->fetch(PDO::FETCH_ASSOC))
        {
            echo' <p> '.$data['CONTENT'].'</p>';
            
        }       
       
   }             
        
?>  
        

   