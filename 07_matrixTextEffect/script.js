var para = document.querySelector('.para p');
const character = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML
let intervalId ;


// para.addEventListener('mouseenter', function() {
    //    setInterval(() => {
        
        //      const str = text.split('').map((char, index) => {
            //         if(index>iteration){
                //             return char;
                //         }
                //         return character.split('')[Math.floor(Math.random() * 53)];
                //     }).join('')
                
                //     // console.log(str)
                //     para.innerText = str;
                //     iteration += 0.5;
                
                //    },100)
                // });
para.addEventListener('mouseenter',function(){
    let iteration = 0;

    function randomText(){
    const str = text.split('').map((char,index)=> {
        if(index < iteration){
            return char;
        }
        return character.split('')[Math.floor(Math.random()*52)]
    }).join('')
    para.innerText = str ;
    iteration += 0.25;
    //Stop when all letters are revealed 
    if(iteration >= text.length){
        clearInterval(intervalId); // Stop interval 
    }
} 
// clear any existing interval first   
if(intervalId) clearInterval(intervalId) ;

   intervalId = setInterval(randomText ,30);

});


//##### Leave the mouse original text will be restored########## 
// para.addEventListener('mouseleave', function(){
//     if(intervalId) clearInterval(intervalId);
//     para.innerText = text;
// })