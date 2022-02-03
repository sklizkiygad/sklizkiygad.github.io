
var d=document;
var bibop=d.querySelectorAll('.item_box');
var dataid;
var pika;
var title;
var price;
var datafile=[];
var sock= JSON.parse(localStorage.getItem('cart'));
var spongebob=d.getElementById('price');


window.onload= function bbt(){
  if(Object.keys(sock).length !==0 ){
    //alert('full');
    var dima=0;

    for(var i=0;i<Object.keys(sock).length;i++)
    {
        dima+=parseInt(Object.values(sock)[i][1]);
    }
    spongebob.innerHTML=dima;


}
else{
  spongebob.innerHTML=0;
}


}


 function setCartData(o){
   localStorage.setItem('lohik', JSON.stringify(o));
   //console.log(JSON.parse(sessionStorage.getItem(0))[0]);
  document.location.href = "./productpage.html";
  
   return false;
  
}

bibop.forEach(item => item.addEventListener('click', propka));

function propka(){
    dataid=this.getAttribute('data-id');
    pika=d.querySelectorAll('.card-img-top')[dataid-1].getAttribute('src');
    title=d.querySelectorAll('.card-title')[dataid-1].innerHTML;
    price=d.querySelectorAll('.card-text')[dataid-1].innerHTML;
    
    
   datafile = [title, price,pika,dataid];
   setCartData(datafile);
   

}









