// ----------------- Dates in JavaScript ---------------------->>>>>>>>>> 

// Creating a new Date object with current date & time
let myDate = new Date()

console.log(myDate);              // Full date & time object 
// 👉 Example: 2025-08-31T16:27:42.918Z

console.log(myDate.toString());   // Human-readable string (includes day, date, time, timezone)
// 👉 "Sun Aug 31 2025 21:57:42 GMT+0530 (India Standard Time)"

console.log(myDate.toDateString()); // Only date in readable form (e.g., "Sun Aug 31 2025")
// 👉 "Sun Aug 31 2025"

console.log(myDate.toLocaleString()); // Date + time in local format (depends on system settings)
// 👉 "31/8/2025, 9:57:42 pm"

console.log(myDate.toTimeString());   // Only time + timezone info
// 👉 "21:57:42 GMT+0530 (India Standard Time)"

console.log(myDate.toLocaleTimeString()); // Localized time (e.g., "8:32:45 PM")
// 👉 "9:57:42 pm"

console.log(typeof myDate);          // "object" → Dates are objects in JS
// 👉 "object"


// ----------------- Custom Date ------------------------------

// new Date(year, monthIndex, day)
// Note: Month is ZERO-based (0 = Jan, 8 = September)
let myCreatedDate = new Date(2025, 8, 2)  
console.log(myCreatedDate.toDateString()); // "Tue Sep 02 2025"
// 👉 "Tue Sep 02 2025"


// ----------------- Working with Timestamps ------------------

// Date.now() → current time in milliseconds since Jan 1, 1970 (Unix Epoch)
let myTimeStamp = Date.now()

console.log(myTimeStamp);  // Example: 1756654662340 (milliseconds)
// 👉 Example: 1756654662340

// getTime() → gives timestamp (milliseconds) for a specific date object
console.log(myCreatedDate.getTime()); // Milliseconds for Sep 2, 2025
// 👉 1756770600000

// Convert milliseconds → seconds
// Divide by 1000 (since 1s = 1000ms), and use Math.floor to remove decimals
console.log(Math.floor(Date.now() / 1000)); 
// Example: 1756654662 (seconds)
// 👉 Example: 1756654662


// ----------------- Extracting Parts of Date -----------------

let newDate = new Date()
console.log(newDate);   // Current date and time
// 👉 Example: 2025-08-31T16:27:42.918Z

// getMonth() → returns month (0–11), so +1 for human-readable month
console.log(newDate.getMonth() + 1); // e.g., 8 for August
// 👉 Example: 8

// getDay() → returns day of week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay()); // Example: 0 = Sunday
// 👉 Example: 0

// String interpolation with Date
// Here we’re embedding day into a string
` ${newDate.getDay()} and the time `
// 👉 "0 and the time"


// ----------------- Localized Date Formatting ----------------

// toLocaleString() with options → customize output
console.log(
  newDate.toLocaleString('default', {
    weekday: "long"   // Full weekday name (e.g., "Sunday")
    // You can add more options like year, month, day, hour, minute, second
  })
);
// 👉 "Sunday"
