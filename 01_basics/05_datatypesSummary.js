// -----------------------------
// JavaScript Data Types Summary
// -----------------------------

// ✅ Primitive Types (7 in total): String, Number, Boolean, null, undefined, Symbol, BigInt

// Number (integer and decimal are both "number")
const score = 100;            // integer number
const scoreValue = 100.3;     // floating-point number
console.log(typeof score);        // "number"
console.log(typeof scoreValue);   // "number"

// Boolean (true/false)
const isLoggedIn = false;
console.log(typeof isLoggedIn);   // "boolean"

// null (special value meaning "empty" or "no value")
// Note: typeof null is a long-known JavaScript bug → it returns "object"
const outsideTemp = null;
console.log(typeof outsideTemp);  // "object"

// undefined (declared but not assigned yet)
let userEmail;
console.log(typeof userEmail);    // "undefined"

// Symbol (unique identifiers)
// Even if they look the same, each Symbol is always unique
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);    // false (different unique values)
console.log(typeof id);           // "symbol"

// BigInt (very large integers beyond Number limit)
// Add "n" at the end of the number
const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber);    // "bigint"


// ✅ Reference Types (Non-primitive): Arrays, Objects, Functions

// Array (ordered collection)
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);        // "object" (arrays are objects in JS)

// Object (key-value pairs)
let myObj = {
    name: "hitesh",
    age: 22,
};
console.log(typeof myObj);        // "object"

// Function (first-class object in JS)
// Functions themselves are objects, but typeof returns "function"
const myFunction = function() {
    console.log("Hello World");
};
console.log(typeof myFunction);   // "function"




// -----------------------------
// Stack vs Heap Memory in JS
// -----------------------------

// 🔹 Stack (used for Primitive types)
// Each variable gets its own copy of the value.
// Changing one does NOT affect the other.

let siteName = "learnwithcode";

// Copying the value into another variable (stack copy)
let newSiteName = siteName;

// Modify the copied variable
newSiteName = "codeacademy";

// Logs
console.log(siteName);    // "learnwithcode" (original unchanged)
console.log(newSiteName); // "codeacademy" (changed copy)


// 🔹 Heap (used for Non-Primitive types → Objects, Arrays, Functions)
// Variables store a *reference* to the object in memory.
// Updating one reference affects the other.

let studentOne = {
    email: "student@mail.com",
    id: "std123"
};

// studentTwo points to the SAME object in Heap.
let studentTwo = studentOne;

// Modify via studentTwo
studentTwo.email = "newstudent@mail.com";

// Logs
console.log(studentOne.email); // "newstudent@mail.com" (also changed!)
console.log(studentTwo.email); // "newstudent@mail.com"

// ------------------------------------------
// 📌 Quick Notes:
// - Stack → Holds primitive values (String, Number, Boolean, null, undefined, Symbol, BigInt)
//           Works with copies (safe, independent).
//
// - Heap → Holds non-primitive values (Objects, Arrays, Functions)
//          Works with references (changes affect all references).
// ------------------------------------------

