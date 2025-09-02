// ----------------- Arrays in JavaScript ---------------------->>>>>>>>>

// Creating arrays
const myArray =  [0, 1 , 2, 3, 4 , 5 ]   // Normal array with numbers
const myHeroes = ["shaktimaan" , "naagraj" ,"venom"] // Array of strings

// Another way to create array using Array constructor
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArray[1]);  
// 👉 Accessing element at index 1 → Output: 1


// ----------------- Array Methods -----------------------------

myArray.push(6)     
// push() → Adds element at the END of array
// myArray = [0,1,2,3,4,5,6]

myArr2.pop()        
// pop() → Removes LAST element of array
// myArr2 = [1,2,3]

// console.log(myArr2); 
// 👉 Would print [1,2,3]

// myArray.unshift(9)   
// unshift() → Adds element at the START of array
// After this → [9,0,1,2,3,4,5,6]

// myArray.shift()
// shift() → Removes FIRST element of array
// If unshift was done before, then 9 would be removed

// console.log(myArray.includes(9));
// includes() → Returns true/false if value exists in array
// 👉 false (if 9 is not present)

// console.log(myArray.indexOf(9));
// indexOf() → Returns index of element, -1 if not found
// 👉 -1 (since 9 is not in the array currently)

// console.log(myArray.indexOf(3));
// 👉 3 (since element '3' is at index 3)

// const newArr = myArray.join()
// join() → Converts array into STRING separated by commas
// Example: "0,1,2,3,4,5,6"

// console.log(myArray);
// 👉 Prints the original array

// console.log(newArr);
// 👉 Prints "0,1,2,3,4,5,6"

// console.log(typeof(newArr));
// 👉 "string" (important for interview! join() always returns a string)


// ----------------- Slice vs Splice ----------------------------

console.log("A" , myArray);  
// 👉 Prints: A [0,1,2,3,4,5,6]

const myn1 = myArray.slice(1,3)  
// slice(start, end)
// Copies elements from index 1 to (end-1)
// Does NOT modify original array
// myn1 = [1,2]
// myArray remains [0,1,2,3,4,5,6]

// Interview TIP:  
// slice() → non-destructive (does not change original array)
// splice() → destructive (changes the original array)


// If we used splice instead:  
// const myn2 = myArray.splice(1,3)
// splice(start, deleteCount)
// Removes elements starting from index 1, total 3 elements
// myn2 = [1,2,3]
// myArray would become [0,4,5,6] (original array changed!)


// 👉 Interview-ready one-liner:

//"slice is non-destructive (doesn’t change original array), while splice is destructive (it modifies the original array)."