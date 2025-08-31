// ---------------------------------------------
// 1. String Declaration
// ---------------------------------------------

// ✅ Using string literals (most common)
let lang = "JavaScript";
let greeting = 'Hello';
let framework = `ReactJS`; // Template literals

// ✅ Using String object (not recommended, creates an object instead of primitive)
const gameTitle = new String("CodeMaster");

console.log(gameTitle[0]);          // "C" → Strings are array-like (index based)
console.log(gameTitle.__proto__);   // Shows all String methods in prototype


// ---------------------------------------------
// 2. String Concatenation
// ---------------------------------------------

let firstName = "Arjun";
let lastName = "Sharma";

// ❌ Old way
console.log("Hello my name is " + firstName + " " + lastName);

// ✅ Modern way (Template literals with backticks)
console.log(`Hello my name is ${firstName} ${lastName} and I enjoy coding`);


// ---------------------------------------------
// 3. Useful String Methods
// ---------------------------------------------

let text = "   Learn JavaScript Fast   ";

// Length
console.log(text.length);     // 27 (includes spaces)

// charAt / indexOf
console.log(text.charAt(2));  // "a"
console.log(text.indexOf("Java")); // 8

// toUpperCase / toLowerCase
console.log(text.toUpperCase()); // "   LEARN JAVASCRIPT FAST   "
console.log(text.toLowerCase()); // "   learn javascript fast   "

// trim (removes spaces from both ends)
console.log(text.trim());     // "Learn JavaScript Fast"

// slice(start, end)
console.log(text.slice(3, 13));   // "rn JavaScr"

// substring(start, end) → similar to slice, but doesn’t accept negative indexes
console.log(text.substring(3, 13)); // "rn JavaScr"

// replace
let website = "https://example.com/arjun%20sharma";
console.log(website.replace("%20", "-"));  // "https://example.com/arjun-sharma"

// includes
console.log(website.includes("example"));  // true

// split → converts string into array
let fruits = "apple,banana,grapes";
console.log(fruits.split(","));  // ["apple", "banana", "grapes"]


// ---------------------------------------------
// 4. String Objects & Prototype
// ---------------------------------------------

// When you create strings using `new String()`, JS wraps it into a String object.
// This gives access to built-in methods through __proto__.

const anotherTitle = new String("ValorQuest");

console.log(anotherTitle.__proto__); // Lists all string methods (like slice, trim, etc.)

// ⚡ Behind the scenes:
// JS automatically converts string literals into String objects when calling methods.
// Example:
"hello".toUpperCase(); 
// Internally → new String("hello").toUpperCase();


// ---------------------------------------------
// 📌 Quick Summary Notes
// ---------------------------------------------
// - Prefer string literals → "Hello", not new String("Hello")
// - Use backticks (`) for cleaner concatenation & embedding variables
// - Common methods: length, charAt, indexOf, toUpperCase, toLowerCase,
//                   trim, slice, substring, replace, includes, split
// - Strings are immutable → methods return a new string, don’t modify original
// - __proto__ shows methods available to String objects
