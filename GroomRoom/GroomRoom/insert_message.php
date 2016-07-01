<?php

//INSERTING THE MESSAGE 

    require 'dbconnect.php';
    
    session_start();

  //If values are correctly set
  if($_GET['message']!="" && $_GET['author'] != "" && $_GET['talk'] != "")
  {
  
  //NEW SOLUTION
  
  $insertion = $bdd->prepare('INSERT INTO message(content,author,talk) VALUES (:content, :author, :talk)');
  $insertion->execute(array(
        'content'=>$_GET['message'],
        'author'=>$_GET['author'],
        'talk'=>$_GET['talk']
        ));
    
}
?>