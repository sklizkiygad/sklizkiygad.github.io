<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BANYA</title>
    <link rel="stylesheet" href="../css/qrstyle.css">
    <script src="./js/back.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://use.fontawesome.com/8889c0a3c3.js"></script>
  
</head>



<body>

    <div class="container-fliud sec1">
        <div class="blur">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #0a23355e;">
          <a class="navbar-brand" href="#">BOYS</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                  <a class="nav-link" href="../index.html">Главная<span class="sr-only">(current)</span></a>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="../foto.html">Фотокарточки</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../price.html">Прайс</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="../squad.html">О нас<span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <span class="navbar-text">
              <a href="https://vk.com/idmcdante02"><svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-down-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path fill-rule="evenodd" d="M5.172 5.172a.5.5 0 0 1 .707 0l4.096 4.096V6.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1 0-1h2.768L5.172 5.879a.5.5 0 0 1 0-.707z"/>
                </svg></a>
            </span>
          </div>
        </nav>
  
      
          <h1 style="font-family: 'Comfortaa'; color: bisque;" class="text-center">Ваш QR билет (сохраните его и предъявите на входе)</h1>
          


         <div style="margin-top:110px;" class="text-center">
          <?php
          include "./qr/qrlib.php";
          include('./includes/db.php');

          $result=mysqli_query($connection,"SELECT `ID` FROM `orders` ORDER BY `ID` DESC LIMIT 1");
      

          while ($row = mysqli_fetch_assoc($result)) {
            $gay=$row['ID'];
          }

        

          $qr='Number ID of order: '. "$gay";
          
          QRcode::svg($qr, false, "M", 10, 2, false);
          mysqli_close($connection);
          ?>
          </div>
          <h2 style="margin-top:50px;font-family: 'Comfortaa'; color: white;" class="text-center">Нажмите вверху на "Главная" чтобы вернуться на главную страницу</h2>




            



              <h4 style="margin-top: 238px;color:beige;font-size: 28px;font-family: 'Comfortaa', cursive;" class="text-center">"Человеку иногда надо вкусить немного безумия, чтобы освежить вкус к жизни."&copy; Ольгерд Фон Эверик</h4>
              <br>





        </div>
        </div>






        

        </body>
</html>









