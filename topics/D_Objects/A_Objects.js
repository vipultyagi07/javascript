// /**
//  *   What is an Object in JavaScript?
//  * 
//  *     An object in JavaScript is a collection of properties,
//  *     where each property consists of a key (string or Symbol) and a value.
//  */


//  /**
//   *    📌 1️⃣  Creating an Object
//   */


//  // 1.  Using Object literal

//  let user = {
//     name: "Vipul",
//     age: 26,
//     city: "Bangalore"
//   };
//   console.log(user);
  
// /**
//  *  Key Takeaways:
//  *   name, age, city are keys (always strings internally).
//  *   "Vipul", 26, "Bangalore" are values.
//  *   JavaScript objects are mutable (we can modify them anytime).
//  */





// // 2. Using new Object()


// let user1 = new Object();
// user1.name = "Vipul";
// user1.age = 26;
// console.log(user1);

// /**
//  *  🔹 Same as object literal, but less preferred due to verbosity.
//  */



// // 3. Using a Constructor Function   X :  no use

// function UserFunc(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   let user2 = new UserFunc("Vidit", 24);
//   console.log(user2);
  
//   /**
//    *  Why Use Constructor Functions?
//    *     1.  Instead of manually creating multiple objects like:
//    *           let user1 = { name: "Vipul", age: 26 };
//    *           let user2 = { name: "Deeksha", age: 25 };
//    * 
//    *     2.  You can use a constructor function to create as many objects as you want:
//    *            let user2 = new User("Deeksha", 25);
//    *            console.log(user2); 
//    *       
//    *          // Output: User { name: "Deeksha", age: 25 }

//    */



//    /**
//     * 📌 2️⃣ Accessing & Modifying Object Properties
//     */


//    // 🔹 Dot Notation (Most Common)

//     console.log(user.name);  // "Vipul"
//     user.age = 27;           // Modify property
//     console.log(user.age);   // 27



//   // 🔹 Bracket Notation (For Dynamic Keys)


//     let key = "city";
//     console.log(user[key]);  // "Bangalore"
//     user[key] = "Delhi";     // Modify using key variable
  
//   /**
//    *  Used when property names are dynamic.
//    */

   
//   // 🔹 Adding New Properties

//     user.country = "India";
//     console.log(user);

//   // 🔹 Deleting Properties

//     delete user.age;
//     console.log(user);
  


//     /**
//      *   📌 3️⃣ Objects Are Stored by Reference
//      */


//     /**
//      * 
//      * Unlike primitive types (which are stored by value), objects are stored by reference.
//      * 
//      */

//     let obj1 = { name: "Vidit" };
//     let obj2 = obj1;   // Both point to the same object in memory

//     obj2.name = "Vimmu";
//     console.log(obj1.name); // "Vimmu"
//     console.log(obj2.name); // "Vimmu"

//     /**
//      *  Key Takeaway: Changing obj2 also changes obj1, because both reference the same memory location.
//      */


//     /**
//      *    📌 4️⃣ Differences Between JavaScript Objects & Java Maps
//      */

// /**
//  *  Feature	        JavaScript Object	            Java HashMap

//     Key Type	        Always a string or Symbol	        Any Object
//     Iteration Order	    No guaranteed order	                Maintains insertion order
//     Performance	        Optimized for fast lookup	        Hash-based fast retrieval
//     Method Support	    Limited built-in methods	        Many utility methods (containsKey, remove, etc.)
//     Best Use Case	    Small key-value pairs	            Large-scale key-value lookups
//  */





//     /**
//      *      📌 5️⃣ Checking If a Property Exists
//      */

//     console.log("age" in user);  // true
//     console.log(user.hasOwnProperty("name")); // true


//     /**
//      *     📌 6️⃣ Looping Through Objects
//      */


//     for(let key in user){
//         console.log(key,":       ",user[key]);
//     }

//     // same, below we are using '$' (Using Template Literals) for concatenation

//     for (let key in user) {
//         console.log(`${key}:         ${user[key]}`);
//       }




      let tusObj ={name:"tushar",age:28};

      let vipObj = tusObj;

      vipObj.name = "Vipul";

      console.log(vipObj);
      console.log(tusObj);

      // spread oprator    
      let obj3 = {...tusObj,name:"akash"};

             ///       OR
      /**
       *       let obj3 = {...tusObj};
       * 
       *       obj3.name = "akash"
       */

    //   obj3.name= "akash";

      console.log(obj3);
      console.log(tusObj);

