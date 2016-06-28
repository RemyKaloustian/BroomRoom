<?php

//SELECTING MESSAGES   

 require 'dbconnect.php';

    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Content-type: application/json');

//If values are correctly set
if($_GET['talk'] != "")
{

        //NEW STRUCTURE
        $request = $bdd->prepare('SELECT CONTENT,AUTHOR FROM MESSAGE WHERE TALK = :talk');
        $request->execute(array("talk"=>$_GET['talk']));
        $data = $request->fetch();
            
        $comments = new stdClass();
        
        if(!data)
        {
             $reponse = new AJAXAnswer(false, 'aucun nouveaux commentaires');
             $reponse->answer();
        }
        else
        {
            
        }


    //BEFORE
    //mysql_connect("localhost","root","");
   // mysql_select_db("broomroom");
    //error_reporting(E_ALL && ~E_NOTICE);
   
   // $talk=$_GET['talk'];

    //$sql="SELECT CONTENT,AUTHOR FROM MESSAGE WHERE TALK = '$talk'";
  //  $result=mysql_query($sql);
   // if($result){
    //echo "You have been successfully subscribed.";
           //   setcookie("msg","You have been successfully subscribed.",time()+5,"/");
            //  header("location:yourphppage.php");
    //}
     //if(!$sql)
   // die(mysql_error());
   // mysql_close();
}
?>