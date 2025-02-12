/**
 * Challenge 1: Swap Variables Without Temporary Variable
 */

let a=1;
let b=2;

b=b+a;
a=b-a;
b=b-a;

console.log("a =",a," b =",b);