/**
 * 1. Declaring Functions
 */


//  1.1 Function Declaration

    /**
     * 
     * A function can be declared using the function keyword:
     * 
     */

    

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Vipul")); 


// 1.2 Function Expression

    /**
     * 
     * A function can also be assigned to a variable:
     * 
     */
    const add = function(a, b) {
        return a + b;
    };
    console.log(add(5, 3)); // Output: 8
    


// 1.3 Arrow Functions (ES6)

const multiply1 = (a, b) => {
    return a * b
};

console.log("multiply using arrow function 1 : "+multiply1(4, 2)); // Output: 8



const multiply2 = (a, b) => {a * b};
console.log("multiply using arrow function 2 : "+multiply2(4, 2)); // Output: 8



const multiply3 = (a, b) =>a * b;
console.log("multiply using arrow function 3 : "+multiply3(4, 2)); // Output: 8


/**
 *  multiply2(4,2) 
 *  
 *  This is incorrect!
 * 
 * If you use {} in an arrow function, JavaScript expects a block of code, and you must explicitly write return.
 */







//@tushar

// Window.name = "Akash";

//  let obj1 = {name: "vipul",greet: ()=>{
//     console.log("hello",this.name);
//  }};

//  obj1.greet();




//  let obj2 = {name: "vipul",greet: function(){
//     console.log("hello",this.name);
//  }};

//  obj2.greet();




 

// var a=30;

// const greeta = function() {

//     let a = 34;
//     console.log("simple function: ",this.a);
//     return "Hello, " + "wdvsdfv" + "!";
// };

// greeta(); // Output: Hello, Vipul!




// const tkmkc = ()=>{

//     let a=50;
//     console.log("Arrow function: ",this.a);


//     return "Hello, " + "wdvsdfv" + "!";

// }

// tkmkc();

// // this.name wont work



