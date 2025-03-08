
    /**
     * 
     *    async/await is a cleaner way to handle asynchronous code instead of chaining .then().
     * 
     *    It is an alternate way of promise, it reduces the use of chaining of .then()
     * 
     */


let fetchData = async () => {
    let success = true;

    if (success) {
        return "Data fetched successfully!";
    } else {
        throw new Error("Error: Failed to fetch data.");
    }
};

let fetchDataAsync = async () => {
    try {
        let data = await fetchData();  // Awaiting the promise resolution
        console.log(data);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Fetched successfully");
    }
};

fetchDataAsync();

 // Calling the async function
