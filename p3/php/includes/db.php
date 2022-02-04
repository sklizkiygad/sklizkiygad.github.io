<?php

$connection = mysqli_connect('127.0.0.1', 'root' , 'root', 'banya' );
if( $connection==false)
{
    echo 'Не удалось подключиться к бд <br>';
    echo mysqli_connect_error();
    exit();
}
?>
