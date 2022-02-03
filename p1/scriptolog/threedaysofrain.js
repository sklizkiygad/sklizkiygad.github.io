var d=document;
var mp = d.getElementById('mainphoto');
var mt = d.getElementById('maintext');
var pop = d.getElementById('priceofproduct');
var sock= JSON.parse(localStorage.getItem('cart'));
var cock= JSON.parse(localStorage.getItem('lohik'));

var price=d.getElementById('price');




function sexy(){

    if(Object.keys(sock).length!==0){
        //alert('full');
        var dima=0;

        for(var i=0;i<Object.keys(sock).length;i++)
        {
            dima+=parseInt(Object.values(sock)[i][1]);
        }
        price.innerHTML=dima;
    
    
    }
    else{
        price.innerHTML=0;
    }

}


window.onload=function everybody(){

    

   console.log(localStorage);
  // console.log(sock);
    mp.src=cock[2];
    mt.innerHTML=cock[0];
    pop.innerHTML=cock[1];
 

   // sexy();
}

function plusing(){
    var r=d.getElementById('rusikpedik');
    var qty = parseInt(d.getElementById('rusikpedik').value);
    qty=qty+1;
    r.value=qty;
}
function minusing(){
    var r=d.getElementById('rusikpedik');
    var qty = parseInt(d.getElementById('rusikpedik').value);
    
   
    r.value=qty;
    if(qty>1){
      
        qty=qty-1;
    }
    else{
        qty=1;
    }
    r.value=qty;

}
