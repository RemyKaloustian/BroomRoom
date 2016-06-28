<?php

// Connexion à la BD

		try
		{
                //Connection with the online DB
		    //$bdd = new PDO('mysql:host=mysql-lecritikator.alwaysdata.net;dbname=lecritikator_bdd;charset=utf8', '104004_remy', '9y2svy');
                    
                    //Connection to localhost
                    $bdd = new PDO('mysql:host=localhost;dbname=broomroom', 'root', '');
                    
		}
		catch(Exception $e)
		{		    
		    die('EIN PROBLEM ! Erreur : '.$e->getMessage());
		}		

?>