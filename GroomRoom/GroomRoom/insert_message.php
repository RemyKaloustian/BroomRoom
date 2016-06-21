<?php

//INSERTING THE MESSAGE 

//If values are correctly set
if($_GET['message']!="" && $_GET['author'] != "" && $_GET['talk'] != "")
{
    mysql_connect("localhost","root","");
    mysql_select_db("broomroom");
    //error_reporting(E_ALL && ~E_NOTICE);
    $content=$_GET['message'];
    $author=$_GET['author'];
    $talk=$_GET['talk'];

    $sql="INSERT INTO message VALUES ('$content','$author', '$talk')";
    $result=mysql_query($sql);
    if($result){
    //echo "You have been successfully subscribed.";
              setcookie("msg","You have been successfully subscribed.",time()+5,"/");
              header("location:yourphppage.php");
    }
     if(!$sql)
    die(mysql_error());
    mysql_close();
}
?>