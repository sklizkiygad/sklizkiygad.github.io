
  
  var d=document;
  var cartCont = d.getElementById('chumbucket');
  function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
    //console.log(JSON.parse(localStorage.getItem('cart')));
    }

    function setCartData(o){
      localStorage.setItem('cart', JSON.stringify(o));
      return false;
    }
    var cartData = getCartData();

    window.onload=function painting(){

    var cartData = getCartData(), 
    totalItems = '';
    
    //console.log(Object.keys(cartData));
  

    //console.log(Object.keys(cartData));
    //localStorage.clear();
   
   

     if(cartData !== null && Object.keys(cartData).length !== 0){
      var ruslan=Object.values(cartData);

      


      for(var i=0;i<Object.keys(cartData).length;i++){
        totalItems='<table class="table"><thead><tr><th class="ogl" scope="col">product name</th><th class="ogl" scope="col">unit price</th><th class="ogl" scope="col">QTY</th><th class="ogl" scope="col">subtotal</th></tr></thead><tbody><tr><th scope="row"><div class="productinfo"><img src="';
        totalItems+= ruslan[i][3]+'" alt="1"><div style="max-width: 300px;"><h1>';

        //console.log(i);

        totalItems+= ruslan[i][0]+'</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p><div class="chicks"><a href="#"><img src="./img/facebook__12499.png" alt="f"></a><a href="#"><img src="./img/twitter_12500.png" alt="f"></a><a href="#"><img src="./img/pinterest_12501.png" alt="f"></a></div></div></div></th><td><div class="upv"><p class="up">';
        
        totalItems+= ruslan[i][1]+'</p><p class="valik">.€</p></div></td><td><div class="quantity"><input type="button" value="-" class="minus" name="';
        totalItems+= i + 'valuev" onclick="minusing(this.name)"><input type="number" step="1" min="1" max="" id="';
        totalItems+= i +'valuev" name="quantity" onchange="otrisovka()" value="';
        totalItems+= ruslan[i][2] +'" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""><input type="button" value="+" class="plus" name="';
        totalItems+=i+'valuev" onclick="plusing(this.name)"></div></td><td><div class="upv"><p class="subtotal">';
        totalItems+= ruslan[i][1]+'</p><p class="valik">.€</p><button onclick="delbill(';
        totalItems+= Object.keys(cartData)[i] +')"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="#ff0000" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></button></div></td></tr></tbody></table>';
        cartCont.innerHTML+=totalItems;
        otrisovka();
      }
      
  }
  else{
// если в корзине пусто, то сигнализируем об этом
   var ordertotal=d.getElementById('ordertotal');
   ordertotal.innerHTML=0;
   cartCont.innerHTML = '<p class="empty">В корзине пусто!</p>';
  

  }
}

function plusing(id){
  var qty = d.getElementById(id),
  sum= d.getElementById(id).value;
  sum =  parseInt(sum)+1;
  qty.value=sum;
  otrisovka();
}



function minusing(id){
  var qty = d.getElementById(id),
  sum= d.getElementById(id).value;
  if(sum>1){
    sum =  parseInt(sum)-1;
    qty.value=sum;
    otrisovka();
  }
  else{
    return;
  }
}



function otrisovka(){
  var price=d.querySelectorAll('.up');
  var qty = d.getElementsByName('quantity');
  var sumprice=0;
  var ordertotal=d.getElementById('ordertotal');
  var subtotal=d.getElementsByClassName('subtotal');
  var cartData=getCartData();
 
  
  
  
  for(i=0;i<qty.length;i++){
    sumprice+=parseInt(qty[i].value)*parseInt(price[i].innerHTML);
    subtotal[i].innerHTML=parseInt(qty[i].value)*parseInt(price[i].innerHTML);
    cartData[Object.keys(cartData)[i]][2]=qty[i].value; 
  }
  ordertotal.innerHTML=sumprice;

  

  console.log(cartData);
  //console.log(qty[0].value);


  setCartData(cartData);





  return ;
}









  
 








// var d = document,
// cartCont = d.getElementById('chumbucket'); // блок вывода данных корзины
// var yourcart=d.getElementById('yourcart'),
// shipping=d.getElementById('shipping'),
// vat=d.getElementById('vat'),
// ordertotal=d.getElementById('ordertotal');
// var price;
// var prices = [];
// var pikus=0;
// var sup=d.getElementById('ordertotal');










// // Получаем данные из LocalStorage
// function getCartData(){
// return JSON.parse(localStorage.getItem('cart'));
// }
// // Записываем данные в LocalStorage
// function setCartData(o){
// localStorage.setItem('cart', JSON.stringify(o));
// return false;
// }





// window.onload=function openCart(e){


    
   
      
    

// var cartData = getCartData(), // вытаскиваем все данные корзины
//         totalItems = '';
// console.log(JSON.stringify(cartData));
// // если что-то в корзине уже есть, начинаем формировать данные для вывода
// if(cartData !== null && Object.entries(cartData).length !== 0){
//     //totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';


//     /*for(var items in cartData){
//         totalItems += '<tr>';
//         for(var i = 0; i < cartData[items].length; i++){
//             totalItems += '<td>' + cartData[items][i] + '</td>';
//         }
//         totalItems += '</tr>';
//          totalItems += '<table>';
//     }*/


//     var siska=Object.keys(cartData).length;
//     //document.write(Object.keys(cartData));
   
    

//       // document.writeln(Object.values(cartData)[0][3]);
//       //localStorage.clear();
//      //document.writeln(Object.entries(cartData).length);
    
    
//    //document.writeln(Object.keys(cartData));
//    //document.writeln(cartData[Object.keys(cartData)[1]][0]);

   

   
//     for(i=0;i<siska;i++){
//         totalItems+= '<div class="row naming newproduct"><div class="col-md-5"><p>product name</p><div class="productinfo text-left"><img src="';

//         totalItems+= Object.values(cartData)[i][3] +'" alt="1"><div><h1>';
//         totalItems+= Object.values(cartData)[i][0];
//       totalItems+='</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<div class="chicks"><a href="#"><img src="./img/facebook__12499.png" alt="f"></a><a href="#"><img src="./img/twitter_12500.png" alt="f"></a><a href="#"><img src="./img/pinterest_12501.png" alt="f"></a></div></p></div></div></div><div class="col-md-2"><p>unit price</p><p name="unitprice">';
//       totalItems+=Object.values(cartData)[i][1];
//        price=Object.values(cartData)[i][1];
       
      
//        prices.push(parseFloat(price));
//        pikus+=parseFloat(price);

//       totalItems+='</p></div><div class="col-md-2"><p>qty</p><div class="quantity buttons_added"><div class="row"><div class="col-md-4"><input type="button"  value="-" onclick="minusing('
//       totalItems+=i+')" ></div><div class="col-md-4" style="padding: 0;" ><input type="number" onchange="writingqty(this.id,this.value)" step="1" min="1" max="" id="'
//       totalItems+= i +'valuev"name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""></div><div class="col-md-4"><input type="button" value="+"  onclick="plusing('
//       totalItems+=i+')" class="plus"></div></div></div></div><div class="col-md-3 "><p>subtotal</p><div class="naming" style="display: flex; justify-content: space-evenly;"><p class="subtotal" name="';
//       totalItems+= price;
//       totalItems+= '">€.'+ price + '</p><button onclick="delbill(';
      
      
//       totalItems+= Object.keys(cartData)[i]+ ')"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="#ff0000" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></button></div></div></div>';
      
//     }
//     cartCont.innerHTML = totalItems;
//     sup.innerHTML=pikus;

//     /*totalItems = '<div class="row naming newproduct"><div class="col-md-5"><p>product name</p><div class="productinfo text-left"><img src="./img/bug.jpg" alt="1"><div><h1>';
//     totalItems+=cartData[1][0];
//     totalItems+='h1<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p><div class="chicks"><a href="#"><img src="./img/facebook__12499.png" alt="f"></a><a href="#"><img src="./img/twitter_12500.png" alt="f"></a><a href="#"><img src="./img/pinterest_12501.png" alt="f"></a></div></div></div></div><div class="col-md-2"><p>unit price</p><p>';
//     totalItems+=cartData[1][1];
//     totalItems+='</p></div><div class="col-md-2"><p>qty</p><div class="quantity buttons_added"><div class="row"><div class="col-md-4"><input type="button" value="-" class="minus"></div><div class="col-md-4" style="padding: 0;" ><input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode=""></div><div class="col-md-4"><input type="button" value="+" class="plus"></div></div></div></div><div class="col-md-3 "><p>subtotal</p><div class="naming" style="display: flex; justify-content: space-evenly;"><p>';
//     totalItems+='€. 749,50</p><button ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="#ff0000" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></button></div></div></div>';*/


   
// } else  {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = '<p class="empty">В корзине пусто!</p>';
 
// }


  






// }


// function otrisovka(){
//   var qty=d.getElementsByClassName('qty');
//   var subtotal=d.getElementsByClassName('subtotal');
//   var total=0;
//  //d.writeln(subtotal);
//   console.log(subtotal.fj);

//   for(i=0;i<qty.length;i++){
//     total+=parseInt(qty[i])*subtotal[i];
//   }
// sup.innerHTML=total;
  
// }


// function writingqty(ochko,koko){
//   var rock = ochko.charAt(0);
//   ////////////////////////////

//   var subtotal = d.getElementsByClassName('subtotal');
//   subtotal[rock].innerHTML ='€.'+parseFloat(koko)*prices[rock];
//   //prices[rock] = parseFloat(zamena)*prices[rock];



//     pikus=pikus+prices[rock];
//     if(pikus>=0){
//       sup.innerHTML=pikus;
//     }
//     else{
//       sup.innerHTML=0;

//     }

//     otrisovka();

// }






// // function otrisovka(hello,ind){
// //   var subtotal = d.getElementsByClassName('subtotal');

// //   subtotal[ind].innerHTML=hello;
  
// // }




// function plusing(rock){
//   ////////////////////////////
//   var tochto= rock +'valuev';
//   var valuev = d.getElementById(tochto);
//   var zamena= parseInt(valuev.value)+1 ;
 
//   valuev.value=zamena;

//   ////////////////////////////
//   var subtotal = d.getElementsByClassName('subtotal');
//   subtotal[rock].innerHTML ='€.'+parseFloat(zamena)*prices[rock];
//   //prices[rock]= parseFloat(zamena)*prices[rock];


  

  
//     pikus=pikus+prices[rock];
//     if(pikus>=0){
//       sup.innerHTML=pikus;
//     }
//     else{
//       sup.innerHTML=0;

//     }

  
  
  
// }

// function minusing(rock){
// ////////////////////////////
// var tochto= rock +'valuev';
// var valuev = d.getElementById(tochto);
// var zamena= parseInt(valuev.value)-1 ;


// if(zamena>0){
//   valuev.value=zamena;
// }
// else{
//   zamena=1;
//   valuev.value=zamena;
// }

// ////////////////////////////
// var subtotal = d.getElementsByClassName('subtotal');
// subtotal[rock].innerHTML ='€.' + parseFloat(zamena)*prices[rock];



// var sum=0;
// for(i=0;i<prices.length;i++){
//   sum+=prices[i];
// }

// if(pikus > sum){
//   pikus=pikus-prices[rock];
// }






// sup.innerHTML=pikus;


    

