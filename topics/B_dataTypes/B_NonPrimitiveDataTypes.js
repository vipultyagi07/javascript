// Object
let user = { name: "Vipul", age: 25 };
user.city = "Bangalore";  // ✅ Allowed (Objects are mutable)
user.gandu = "tushar";  // ✅ Allowed (Objects are mutable)

console.log(user);

// Array
let skills = ["React", "Next.js", "Spring Boot",1,true];
skills.push("AWS");  // ✅ Allowed (Arrays are mutable)
console.log(skills);

// Function

let greet = function() {
  return "Hello, Vipul!";
};
console.log(greet());
