/**
 *  1. Write a function to check if a number is even or odd.
 */


 let isEven = (a)=> a%2==0;

 console.log(isEven(5));
 console.log(isEven(4));


 /**
  * 
  *  2. Write a function that returns the maximum of two numbers.
  * 
  */


  let maxOfTwo1 = (a,b)=>{

    if(a>b){
        return a;
    }
    return b;
  }

  console.log(maxOfTwo1(2,3));
  console.log(maxOfTwo1(5,8));

   //                   OR


   let maxOfTwo2 = (a,b)=>a>b?a:b;

   console.log(maxOfTwo2(2,3));
   console.log(maxOfTwo2(5,8));


   /**
    * 3.  Write a function to reverse a string.
    */



   let reverseString = (str)=>{
    // important
    let charArray = str.split('');

    console.log(charArray);

    let j=charArray.length-1;

    for(let i=0;i<charArray.length/2; i++){
        let c = charArray[j];
        charArray[j--]=charArray[i];
        charArray[i]=c;
    }

    console.log(charArray);

    // important

    return charArray.join('');
     
   }

   console.log(reverseString("vipul"));




