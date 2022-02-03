window.onload=function allofthis(){

    var d=document, 
    card = d.querySelectorAll('.item_box');
    
  

card.forEach(item => item.addEventListener('click', Productpage));


function setCartData(o){
        localStorage.setItem('product', JSON.stringify(o));
        return false;
    }

   

    

    
function Productpage(e){
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    var cartData = {}, // получаем данные корзины или создаём новый объект, если данных еще нет
            parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
            itemId = this.getAttribute('data-id'), // ID товара
            itemTitle = parentBox.querySelector('.card-title').innerHTML, // название товара
            itemPrice = parentBox.querySelector('.card-text').innerHTML; // стоимость товара
            pica = parentBox.querySelector('.card-img-top').getAttribute('src'); // картинка
           // console.log(cartData);
            
            
            
    //if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
     //   cartData[itemId][2] += 1;
    //} else { 
        // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, itemPrice, pica];
        setCartData(cartData);
    //}
    // Обновляем данные в LocalStorage
    if(!setCartData(cartData)){ 
        this.disabled = false; // разблокируем кнопку после обновления LS
        //cartCont.innerHTML = 'Товар добавлен в корзину.';
        //alert("perehod");
       // console.log(JSON.stringify(cartData));
       // document.location.href = "./productpage.html";
    }

    

    /*sum=0;
    for(var i=0;i<Object.keys(getCartData()).length;i++){
        sum+=parseInt(getCartData()[Object.keys(getCartData())[i]][1]);
        koreyka.innerHTML=sum;
    }*/

    
    //console.log(sum);
    //localStorage.clear();
    
    //return 0;
    }
   /* sum=0;
    for(var i=0;i<Object.keys(getCartData()).length;i++){
        sum+=parseInt(getCartData()[Object.keys(getCartData())[i]][1]);
        koreyka.innerHTML=sum;
    }*/
}




