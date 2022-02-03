var mylist;


function delbill(e){
  
      mylist= JSON.parse(localStorage.getItem('cart'));
      delete mylist[e];
          localStorage.setItem('cart', JSON.stringify(mylist));
          console.log(JSON.stringify(mylist));
          location.reload();
          alert('Товар удален!');
          return false;
      
 
  }
