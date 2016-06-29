<?php

//SELECTING MESSAGES   

 require 'dbconnect.php';

    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Content-type: application/json');

//If values are correctly set
if($_GET['talk'] != "")
{



        //NEW STRUCTURE TEST 2
        
        //$reponse = $bdd->query('SELECT AUTHOR,CONTENT FROM MESSAGE WHERE TALK =\"'.$_GET['talk'].'\"');
        
       // while($donnees = $reponse->fetch())
        //{
           // echo'<p>'.$donnees['content'].'</p>';
        
       // }
        
    //}
        


        //NEW STRUCTURE TEST 1
        $request = $bdd->prepare('SELECT AUTHOR,CONTENT FROM MESSAGE WHERE TALK = :talk');
        $request->execute(array("talk"=>$_GET['talk']));
        
        
        while($data = $request->fetch(PDO::FETCH_ASSOC))
        {
            print_r($data['CONTENT']."\n");
            
        }
            
        
        
          
       
   }     
           // while($data = $request->fetch())
            //{
                //echo'<p>'.$data[\'author\'].' + '.$data[\'content\'];
                //print_r ($data);
               // foreach($data as $value)
               // {
                    //print_r($value[0]);
                //}
            //}
        
        
           
        

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
//}
?>