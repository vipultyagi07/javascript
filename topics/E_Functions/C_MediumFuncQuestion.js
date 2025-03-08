/**
 *   1.  Write a function that takes an array and returns the sum of all elements.
 */

    let arr= [1,2,3,4,5,6,7,8];


    let sum = (a)=>{
        let sum=0;
        for(let i=0;i<a.length;i++){
            sum = sum + a[i];
        }
        return sum;
    }

    console.log(sum(arr));


    /**
     *  2.  Factorial of a number
     */


    let n= 5;

    let factorial =(n)=>{

        let fact=1;
        for(let i=1;i<=n;i++){
            fact=fact*i;
        }
        return fact;
    }

    console.log(factorial(n));


        /**
         *   3. Count vowels in a string
         */


   
   let countVowel=(str)=>{

   let char =  str.split('');
   let count=0;
   console.log(char);
   for(let i=0;i<char.length;i++){

        if(char[i]=='a' || char[i]=='e' || char[i]=='i' || char[i]=='o' || char[i]=='u'){
            count++;

        }

     }
   return count;
   }

   console.log(countVowel("abcdiouwa"));

