const arr = [ {
    dp:"https://images.unsplash.com/photo-1769063159859-1c4a03b21f4b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1768933294181-82778103e501?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:'https://images.unsplash.com/photo-1768822392667-a5913a245ed0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D', story:'https://images.unsplash.com/photo-1768820416651-92137322999e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
},
{
    dp:'https://images.unsplash.com/photo-1548783352-782f2ad6bedc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D', story:'https://images.unsplash.com/photo-1768489038182-7db6980fd841?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
},
{
    dp:'https://images.unsplash.com/photo-1768463851971-a813d5797341?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' , story:'https://plus.unsplash.com/premium_photo-1768514188569-4054ac174380?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
},
{
    dp:'https://plus.unsplash.com/premium_photo-1768514188569-4054ac174380?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' , story:'https://images.unsplash.com/photo-1768595629816-cb20775bdec2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
},
{
    dp:'https://images.unsplash.com/photo-1768324969851-689f7e5494a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' , story:'https://images.unsplash.com/photo-1766365350485-72904d0529a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
},
{
    dp: 'https://images.unsplash.com/photo-1768184001770-780a623a11ed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' ,story:'https://images.unsplash.com/photo-1768155376869-c07db06f2c47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
}

];

var stories = document.querySelector('.stories');
var clutter = '';

arr.forEach(function(elem , idx){
    clutter += ` <div class="story">
          <img id ="${idx}" src="${elem.dp}" alt="">
        </div>`;

})
stories.innerHTML = clutter;

stories.addEventListener('click',function(dets){
    // document.querySelector('')
    console.log(arr[dets.target.id].story);
    document.querySelector('.fullscreen').style.display = "block";
    document.querySelector('.fullscreen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('.fullscreen').style.display = 'none';
    },3000);
})

