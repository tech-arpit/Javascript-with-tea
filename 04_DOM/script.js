// DOM ---->>>> Document Object Model 
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, 
// allowing programming languages like JavaScript to interact with and manipulate the content, structure, and style of web pages dynamically.
// IN SIMPLE TERMS --- Frontend developers use DOM to access and change HTML elements, attributes, and styles on a webpage using JavaScript.
// (frontend ki js..)

// 4 pillars of DOM:--------------->>>>>>>>
// 1. Selection of an Element 
// 2. Changing HTML 
// 3. Changing CSS 
// 4. Event Listener 

var h1 = document.querySelector('h1');
console.log(h1);
h1.innerHTML = "I am Billionaire ";
h1.style.color = "blue";
h1.style.backgroundColor = "pink";
h1.style.fontFamily = "Arial, sans-serif";

var btn = document.querySelector('button');
btn.addEventListener('click' , function(){
h1.innerHTML = "I am Batman!...";
h1.style.color = "Black";
h1.style.backgroundColor = "yellow"
h1.style.fontSize = "40px"

})


