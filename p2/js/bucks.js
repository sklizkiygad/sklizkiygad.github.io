let d=document,
into=d.getElementById("chumbucket");

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
    }


window.onload=function painting(){
   

    if(getCartData())
    {
        let cartData=getCartData(),
        bob='';
        
        console.log(cartData);
        bob='<table class="table"><thead><tr><th scope="col">№</th><th scope="col">Фото</th><th scope="col">Наименование</th><th scope="col">Цена</th><th scope="col">Размер</th><th scope="col">Количество</th><th scope="col">Итого</th></tr></thead><tbody><tr><th scope="row">1</th><td><img src="';
       bob+=cartData[3]+'" alt="1"></td><td data-label="Наименования">';
       bob+=cartData[0]+'</td><td data-label="Цена">';
       bob+=cartData[1]+' &#8381;</td><td data-label="Размер">12</td><td>';
       bob+=cartData[2]+'</td><td data-label="Итого">';
       bob+=(cartData[1] * cartData[2])+' &#8381;</td></tr></tbody></table> ';
       into.innerHTML=bob;

    }
    else{
        into.innerHTML='<h2 style="text-align:center;">Корзина пуста</h2>';
    }


}