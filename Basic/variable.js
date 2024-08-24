const accountId = 14453
let accountEamil = "test@gmail.com"
var accountPassword = "123456"
acccountCity = "Delhi"

// accountId = 2 // not allowed

accountEamil = "test2@gmail.com"
accountPassword = "1234567"
acccountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEamil, accountPassword, acccountCity])