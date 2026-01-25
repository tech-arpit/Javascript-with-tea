//WHOM / WHEN / WHAT 
var allBtns = document.querySelectorAll('button');

// console.log(allBtns);
allBtns.forEach(function(box){
  box.addEventListener('click',function(){
    if(box.innerHTML == 'Add Friend'){
      box.innerHTML = 'Remove'
    }
    else{
      box.innerHTML = 'Add Friend'
    }
  })
});
