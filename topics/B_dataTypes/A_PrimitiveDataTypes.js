

let username = "Vipul";   // String
let userAge = 26;         // Number
let isActive = true;      // Boolean
let noValue;              // Undefined
let emptyValue = null;    // Null
let bigNumber = 12345678901234567890n; // BigInt


console.log(typeof username);  // "string"
console.log(typeof userAge);   // "number"
console.log(typeof isActive);   // "undefined"
console.log(typeof noValue);   // "undefined"
console.log(typeof emptyValue); // "object" (weird JavaScript behavior!)
console.log(typeof bigNumber); // "bigint"
console.log(typeof uniqueKey); // "symbol"

console.log("           **************                       ");   // "undefined"

// lets store a "string" in boolean and see whether its type get changed or not

isActive = "false";

console.log(typeof isActive);   // "undefined"




