// ----------------------------- Numbers in JavaScript -----------------------------

const score = 400;
// console.log(score);  // Just a normal number

// Using the Number object wrapper (less common, but gives access to methods)
const balance = new Number(100)
// console.log(balance);  // Output: [Number: 100]

// Convert number to string, then check its length
// Example: "100" → length = 3
// console.log(balance.toString().length);

// Fix decimal places (rounds to 2 decimals)
// Example: 100 → "100.00"
// console.log(balance.toFixed(2));

const othernumber = 123.8966
// Rounds number to specified precision (total digits, not just decimals)
// Example: 123.8966 → "124" (3 significant digits)
// console.log(othernumber.toPrecision(3));

const hundreds = 1000000
// Converts number into localized string format
// 'en-IN' = Indian numbering system → 10,00,000
// 'en-US' = US system → 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));


// ----------------------------- Math in JavaScript -----------------------------

// console.log(Math);  // Math object with many built-in methods

// console.log(Math.abs(-4));   // Absolute value → 4
// console.log(Math.round(4.3)); // Rounds to nearest integer → 4
// console.log(Math.round(4.6)); // Rounds to nearest integer → 5
// console.log(Math.ceil(4.3));  // Always rounds UP → 5
// console.log(Math.floor(4.9)); // Always rounds DOWN → 4

// console.log(Math.min(4, 8, 7, 3)); // Finds minimum → 3
// console.log(Math.max(4, 8, 7, 3)); // Finds maximum → 8


// ----------------------------- Math.random() -----------------------------

console.log(Math.random()); 
// Generates a random decimal number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random() * 10) + 1); 
// Random decimal between 1 and 10 (can include decimals)

console.log(Math.floor(Math.random() * 10) + 1); 
// Random integer between 1 and 10 (no decimals)

// Example: Random number between MIN and MAX
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Formula: Math.floor(Math.random() * (range)) + min
// Here → random integer between 10 and 20 (inclusive)
