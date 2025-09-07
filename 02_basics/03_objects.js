// -------------------- Objects in JavaScript --------------------

// Singleton → when an object is created using constructor like Object.create()
// Object literals → normal way of creating objects

const mySym = Symbol("key1") // Declaring a Symbol (unique identifier)

// Creating an object with object literals
const JsUser = {
    name : "Ritesh" ,                  // normal key
    "full name" : "Ritesh Kumar",      // key with space → must be in quotes
    [mySym] : "mykey1" ,               // ✅ symbol used as key (need square brackets)
                                       // without [] it will be treated as string, not Symbol
    age : 18 ,
    location : "Haryana",
    email : "ritesh@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

// -------------------- Accessing Properties --------------------

// console.log(JsUser.email)        // dot notation → "ritesh@google.com"
// console.log(JsUser["email"])     // bracket notation → also works
// console.log(JsUser["full name"]) // must use bracket notation for keys with spaces
// console.log(JsUser[mySym])       // accessing Symbol property → "mykey1"
// console.log(typeof JsUser.mySym) // ❌ undefined (wrong way) 
                                   // correct is JsUser[mySym]

// -------------------- Modifying Properties --------------------

JsUser.email = "ritesh@chatgpt.com"  // changing property → works

// Object.freeze(JsUser) 
// → freezes the object → prevents further changes (cannot add, delete, or modify properties)

JsUser.email = "ritesh@microsoft.com" 
// If freeze() was active, this change would be ignored silently
// console.log(JsUser); // would show email unchanged if freeze was used

// -------------------- Adding Methods --------------------

// Adding a simple method to the object
JsUser.greeting = function(){
    console.log("Hello js user"); // prints a static message
}

// Adding a method that uses `this`
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); // `this.name` → refers to JsUser.name
}

// -------------------- Calling Methods --------------------

console.log(JsUser.greeting);     
// Prints function definition itself (not executed yet)

console.log(JsUser.greetingTwo());
// Executes greetingTwo → "Hello js user, Ritesh"
// After printing the message, returns undefined (because function doesn’t return anything)

