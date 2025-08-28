const accountId = 12345
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed 

accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId , accountEmail , accountPassword,accountCity , accountState])


// prefer not to use **var** because of isssue in block scope and functional scope 