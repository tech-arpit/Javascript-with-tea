var btn = document.querySelector('button')
var h2 = document.querySelector("h2")
var inner = document.querySelector('.inner')
var grow = 0 ;


btn.addEventListener('click',function(){
     btn.style.pointerEvents = 'none'

     var num = 50 + (Math.floor(Math.random()*50))
     

  var zone =  setInterval(function(){
     grow++;
     h2.innerHTML = grow+ '%'
     inner.style.width = grow+'%'

    },num);

    setTimeout(function(){
        clearInterval(zone);
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        console.log(`Downloaded in ${num/10} seconds`)
        
    },num*100)

    
    
})

