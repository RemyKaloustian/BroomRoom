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
    
  
  
  //BEFORE
     // mysql_connect("localhost","root","");
      //mysql_select_db("broomroom");
      //error_reporting(E_ALL && ~E_NOTICE);
     // $content=$_GET['message'];
     // $author=$_GET['author'];
      //$talk=$_GET['talk'];

      //$sql="INSERT INTO message VALUES ('$content','$author', '$talk')";
      //$result=mysql_query($sql);
      //if($result){
      //echo "You have been successfully subscribed.";
          //      setcookie("msg","You have been successfully subscribed.",time()+5,"/");
                //header("location:yourphppage.php");
      //}
     //if(!$sql)
    //die(mysql_error());
    //mysql_close();
}
?>