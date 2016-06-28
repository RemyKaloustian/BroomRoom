<?php

//SELECTING MESSAGES    

//If values are correctly set
if($_GET['talk'] != "")
{
    mysql_connect("localhost","root","");
    mysql_select_db("broomroom");
    //error_reporting(E_ALL && ~E_NOTICE);
   
    $talk=$_GET['talk'];

    $sql="SELECT CONTENT,AUTHOR FROM MESSAGE WHERE TALK = '$talk'";
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