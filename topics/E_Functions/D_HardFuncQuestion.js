        /**
         * 
         *  1. Write a function that returns a function (closure) which adds a given number. Example:
         * 
         */


    function createAdder(x) {
        return function(y) {
            return x + y;
        };
    }
    const addFive = createAdder(5);
    console.log(addFive(10)); 



        /**
         * 
         *  2.  Debounce function (Delays execution until user stops invoking it)
         * 
         */
    
        function debounce(func, delay) {
            let timer;
        
            return function () {
                clearTimeout(timer);  // Reset the timer
                timer = setTimeout(func, delay);  // Wait and then run the function
            };
        }
        
        // Example: Printing after 2 seconds of no calls
        const sayHello = debounce(() => console.log("Hello!"), 2000);
        
        sayHello(); // Starts timer
        sayHello(); // Resets timer
        sayHello(); // Resets timer again
        
        