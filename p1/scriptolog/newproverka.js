//var cock= JSON.parse(sessionStorage.getItem(0));
    var d=document,
   // buki = d.querySelectorAll('.additor');
   koreyka= d.getElementById('price');
    var sum=0;


//buki.addEventListener('click', addToCart);

 function getCartData(){
      return JSON.parse(localStorage.getItem('cart'));
      }
function setCartData(o){
        //localStorage.setItem('cart', JSON.stringify(o));
        localStorage.setItem('cart', JSON.stringify(o));
    
        return false;
    }
   

    
function addToCart(){
    var qtypka = d.getElementById('rusikpedik');
 


  

     var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
          
            itemId = cock[3], // ID товара
            itemTitle = cock[0], // название товара
            itemPrice = cock[1], // стоимость товара
            pica = cock[2],// картинка
            qty = qtypka.value;//количество

        
            

        // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, itemPrice,  qty , pica];

        //document.write(localStorage);
        console.log(localStorage);
        

        setCartData(cartData);

    //
    // Обновляем данные в LocalStorage
     if(!setCartData(cartData)){ 
         //this.disabled = false; // разблокируем кнопку после обновления LS
         //cartCont.innerHTML = 'Товар добавлен в корзину.';
         var dima=0;
         for(var i=0;i<Object.keys(cartData).length;i++)
         {
             dima+=parseInt(Object.values(cartData)[i][1]);
         }
         koreyka.innerHTML=dima;
         alert("Товар добавлен в корзину");
      
     }
        
        
    
    
   
     return false;
    }
    





