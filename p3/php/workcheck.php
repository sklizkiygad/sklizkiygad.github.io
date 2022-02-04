<?php

include('./includes/db.php');



$login=$_POST['login'];
$posada=$_POST['posada'];


$count = mysqli_query($connection, "SELECT * FROM `workers` WHERE `LoginW`= '$login' AND `post` = '$posada'");

if(mysqli_num_rows($count)==0)
{
    header('Location: ../index.html');
}
else{
    
    header('Location: ../worksaite.html');
}





?>