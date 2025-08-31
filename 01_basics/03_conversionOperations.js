let score = "Raju"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN(not a number) ==> but type of NaN is number ..
//  true => 1; false => 0

let isLoggedIn = "Aru"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Aru " => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 2 raise to power 3 ...
// console.log(2/3); quotient ..
// console.log(2%3); remainder ..

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // Addition of string...
// console.log(str3);

// console.log("1" + 2); //12 
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//------EXAMPLE------------
let x = 3 ;
const y = x++;
console.log(`x:${x}, y:${y}`); // output ---- x:4 , y:3


let a = 3 ;
const b = ++a;
console.log(`a:${a}, b:${b}`);  // output ------- a:4 , b:4
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion