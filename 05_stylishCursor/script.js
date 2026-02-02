// var elem = document.querySelectorAll('.elem');
// var elemImage = document.querySelectorAll('.elem img');

// elem.forEach(function(item){
//     item.addEventListener('mouseenter',function(){
//     //    console.log(item.childNodes[3]) 
//     item.childNodes[3].style.opacity = '1';

//     })
//     item.addEventListener('mouseleave',function(){
//         item.childNodes[3].style.opacity = '0';
//     })
//     item.addEventListener('mousemove', function(e){
//    elemImage.style.left = e.pageX + 'px';
//    elemImage.style.top = e.pageY + 'px';
// });
// })
var elem = document.querySelectorAll('.elem');

elem.forEach(function(val){
    console.log(val.childNodes[3])
    val.addEventListener('mousemove',function(){
        val.childNodes[3].style.opacity = '1';

    });
    val.addEventListener('mouseleave',function(){
        val.childNodes[3].style.opacity = '0';
    })

    val.addEventListener('mousemove',function(dets){
        val.childNodes[3].style.left = dets.x +'px';
        val.childNodes[3].style.top = dets.y + 'px';
    })
})



