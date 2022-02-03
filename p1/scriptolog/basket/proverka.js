window.onload=function allofthis(){
    var d=document, 
    card = d.querySelectorAll('.item_box');
    var koreyka= d.getElementById('price');
    var sum=0;
  

card.forEach(item => item.addEventListener('click', addToCart));

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
    }
function setCartData(o){
        localStorage.setItem('cart', JSON.stringify(o));
        return false;
    }

    
function addToCart(e){
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
            parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
            itemId = this.getAttribute('data-id'), // ID товара
            itemTitle = parentBox.querySelector('.card-title').innerHTML, // название товара
            itemPrice = parentBox.querySelector('.card-text').innerHTML; // стоимость товара
            pica = parentBox.querySelector('.card-img-top').getAttribute('src'); // картинка
            
            
            
    //if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
     //   cartData[itemId][2] += 1;
    //} else { 
        // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, itemPrice,  1 , pica];
    //}
    // Обновляем данные в LocalStorage
    if(!setCartData(cartData)){ 
        this.disabled = false; // разблокируем кнопку после обновления LS
        //cartCont.innerHTML = 'Товар добавлен в корзину.';
        alert("Товар добавлен в корзину");
        console.log(JSON.stringify(cartData));
        
        
    }
    sum=0;
    for(var i=0;i<Object.keys(getCartData()).length;i++){
        sum+=parseInt(getCartData()[Object.keys(getCartData())[i]][1]);
        koreyka.innerHTML=sum;
    }

    
    //console.log(sum);
    //localStorage.clear();
    
    return false;
    }
    sum=0;
    for(var i=0;i<Object.keys(getCartData()).length;i++){
        sum+=parseInt(getCartData()[Object.keys(getCartData())[i]][1]);
        koreyka.innerHTML=sum;
    }
}




