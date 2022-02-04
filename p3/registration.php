<?php 
     
     include('./includes/db.php');

     $login = $_POST['login'];
     $tel=$_POST['tel'];
     $email = $_POST['email'];
     $gender = $_POST['gender'];
     $hall = $_POST['hall'];
     $personal = $_POST['personal'];
     $wishes = $_POST['wishes'];



     if($login=='' || $tel=='' || $email=='')
     {
       header("Location:../zapolnite.html");
       exit();
     }




     if($hall=="1.Зал в стиле CyberPunk 2077"){
        $hall=1;
     }
     if($hall=="2.Зал в стиле Ведьмака(Новиградская баня)"){
        $hall=2;
    }
    if($hall=="3.Зал в стиле GachiMuchi(бесплатно: ведущие)"){
        $hall=3;
    }
    if($hall=="4.Зал на улице"){
        $hall=4;
    }
    



  


     if (isset($_POST['login'])) {

       $sql= mysqli_query($connection, "INSERT INTO `guests` (`LoginG`, `PhoneNumG` , `email`) VALUES ('{$login}', '{$tel}', '{$email}')");
        $idhere=mysqli_insert_id($connection);
        $sql2 = mysqli_query($connection, "INSERT INTO `orders` (`Guest_id`,`Hall`, `wishes`) VALUES ('{$idhere}','{$hall}', '{$wishes}')");
      
        if ($sql && $sql2) 
        {
          
          header('Location: qrcode.php');
          
        } 
        else 
        {
          echo '<p>Произошла ошибка: ' . mysqli_error($connection) . '</p>';
        }
      
      }
      ?>