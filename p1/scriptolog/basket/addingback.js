
var d = document,
itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler){
if(elem.addEventListener){
elem.addEventListener(type, handler, false);
} else {
elem.attachEvent('on'+type, function(){ handler.call( elem ); });
}
return false;
}
// Получаем данные из LocalStorage
function getCartData(){
return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
localStorage.setItem('cart', JSON.stringify(o));
return false;
}
// Добавляем товар в корзину
function addToCart(e){
this.disabled = true; // блокируем кнопку на время операции с корзиной
var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
        itemId = this.getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.card-title').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.card-text').innerHTML; // стоимость товара
       
if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
} else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice,  1];
}
// Обновляем данные в LocalStorage
if(!setCartData(cartData)){ 
    this.disabled = false; // разблокируем кнопку после обновления LS
    //cartCont.innerHTML = 'Товар добавлен в корзину.';
    alert("Товар добавлен в корзину");
    
}
return false;
}
// Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;
for(var i = 0; i < itemBox.length; i++){
addEvent(itemBox[i].querySelector('.item_box'), 'click', addToCart);
}

/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
localStorage.removeItem('cart');
//cartCont.innerHTML = 'Корзина очишена.';	
alert("Корзина очищена");
});