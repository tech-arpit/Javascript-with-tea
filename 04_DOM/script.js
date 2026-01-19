
var inc = document.querySelector("#inc");
var dec = document.querySelector('#dec');
var h1 = document.querySelector("h1");

var a = 0;
inc.addEventListener("click" , function(){
    a++;

    h1.innerHTML = a ;
    h1.style.color = " green";

})

dec.addEventListener("click" , function(){
    a--;

    h1.innerHTML = a ;
    h1.style.color = " red";

})



