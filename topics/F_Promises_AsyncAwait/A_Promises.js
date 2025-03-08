    /**
     *
1. Promises

A Promise represents a value that might be available now, in the future, or never. It has three states:

Pending: Initial state, neither resolved nor rejected.

Fulfilled: Operation completed successfully.

Rejected: Operation failed.


*/


let myPromise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Error: Failed to fetch data.");
    }
});

  let fetchData = ()=>{

    return myPromise;
  }

  fetchData()
        .then((data)=> console.log(data))
        .catch((error)=> console.log(error))
        .finally(()=>console.log("fetched sucessfully"));
  

