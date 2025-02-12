console.log("************  Q1   *******************");

let x = 10;
let y = x;
y = 20;


console.log(x, y); // ?


console.log("************  Q2   *******************");



const obj1 = { name: "Vipul" };
const obj2 = obj1;

obj2.name = "Deeksha";

console.log(obj1.name); // ?
console.log(obj2.name); // ?

/**
 * In JavaScript, objects are stored by reference, meaning that when you assign one object to another, both variables point to the same memory location, not separate copies of the object.

Here's how your code works:

const obj1 = { name: "Vipul" };
This creates an object with the property name set to "Vipul" and assigns it to obj1.

const obj2 = obj1;
This doesn't create a new object. Instead, obj2 now points to the same object in memory that obj1 points to. So, both obj1 and obj2 refer to the same object { name: "Vipul" }.

obj2.name = "Deeksha";
This modifies the name property of the object that both obj1 and obj2 refer to. So, now the object looks like { name: "Deeksha" }.

console.log(obj1.name);
Since obj1 and obj2 both refer to the same object, changing the property name through obj2 will also reflect in obj1. So, obj1.name will log "Deeksha".

console.log(obj2.name);
Since obj2 directly modified the name property, obj2.name will also log "Deeksha".
 */

console.log("************  Q3  *******************");


const person = { name: "Sakshi", age: 25 };
person.age = 26;
console.log(person.age); // ?

// person = { name: "Rahul", age: 30 }; // ?

// uncomment above line      ❓ Hint: You can change object properties but cannot reassign const objects.



console.log("************  Q4  *******************");


console.log(myVar); // ?
var myVar = 10;
console.log(myVar); // ?


/**
 * ❓ Hint: var is hoisted but not initialized.
 */


console.log("************  Q5  *******************");

// uncomment below line before

// console.log(myLetVar); // ?
// let myLetVar = 20;
// console.log(myLetVar); // ?


/**
 * ❓ Hint: let is not hoisted like var.
 */

console.log("************  Q6  *******************");

let score = 100;
score += " points";
console.log(score); // ?

console.log(typeof score); // ?



console.log("Modify a Constant Array")

const a = [1,2,3,4,5];

a.push(5345);
console.log(a);


/**
 * ❓ Hint: const prevents reassignment but allows modification of mutable objects.
 */


