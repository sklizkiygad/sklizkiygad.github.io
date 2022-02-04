let d=document,
title=d.getElementById("title").innerHTML,
price=d.getElementById("price").innerHTML,
pica=d.getElementById("image-main").src;









function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
    }
function setCartData(o){
      localStorage.setItem('cart', JSON.stringify(o));
      return false;
  }

    
  function addToCart(){

   
 

    let qty=d.getElementById("countProduct").innerHTML;
    

     var cartData = getCartData() || {};

        
            

     
        cartData = [title, price,  qty , pica];

      
        console.log(localStorage);
        

        setCartData(cartData);

    //
    // Обновляем данные в LocalStorage
     if(!setCartData(cartData)){ 
         //alert("Товар добавлен в корзину");


         // Get the modal
var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


        
     }
        
        

   
     return false;
    }
    

