<?php

//INSERTING THE NEW TALK 

require 'dbconnect.php';

session_start();

//If values are correctly set
if($_GET['newtalk']!="" )
{
    
    //NEW SOLUTION
    
    $insertion = $bdd->prepare('INSERT INTO conversation(name) VALUES (:name)');
    $insertion->execute(array(
          'name'=>$_GET['newtalk']
          ));
    
}
?>