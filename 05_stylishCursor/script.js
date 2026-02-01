var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');

main.addEventListener('mousemove',function(e){
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})