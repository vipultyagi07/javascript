function fetchUser() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => resolve(data)) // Resolve with user data
            .catch(error => reject(error)); // Reject in case of error
    });
}

// Chaining Promises
fetchUser()
    .then(user => {
        console.log("User:", user);
        return new Promise((resolve) =>resolve(user.id)); 
        
    })
    .then(userId => {
        console.log("Fetched user ID:", userId);
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    })
    
    .then(response => response.json()) // Convert response to JSON
    .then(posts => {
        console.log("User's Posts:", posts);
    })
    .catch(error => console.error("Error:", error));
