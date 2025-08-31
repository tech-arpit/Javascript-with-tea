// answer to all these questions are true/false basic maths only ..
// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// but the problem came when we do not compare the same datatype ...

console.log("2" > 1);   // true 
console.log("02" > 1);  // true 
// String is converted to number before comparison ..---------------->>>>
// Reason is the equality(==) check works different fo null bcz its treats null as undefined ...
// In comparison (> ,< , <= , >=) it convert ist as a number nul --> 0 

console.log(null > 0 ); // false 
console.log(null == 0); // false 
console.log(null >= 0); // true 

//----------NOTE----------------
// undefined is never equal to or comparable with numbers (== 0 , > 0 , < 0 --> all false ..)
console.log(undefined == 0);  //false 
console.log(undefined > 0);  // false 
console.log(undefined < 0);   // false 


// Strict type checking (===)
//--> It will check the datatypes ...

console.log("2" === 2); // false.