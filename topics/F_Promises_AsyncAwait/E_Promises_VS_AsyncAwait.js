    /**
     * 
     *  How to gid rid of chaining of promises
     * 
     */



function fetchUser() {
    return new Promise((resolve) => { return resolve({ id: 1, name: "Vipul" });
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {return resolve([{ id: 101, title: "My first post" }]);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {resolve(["Great post!", "Nice read."]);});
}








// Chained Promises
fetchUser()
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return fetchComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => console.error("Error:", error));




    /**
     * 
     *  Now  we will use asysnc await to remove chaining
     * 
     */


    async function fetchData() {
        try {
            let user = await fetchUser();
            console.log("User:", user);
    
            let posts = await fetchPosts(user.id);
            console.log("Posts:", posts);
    
            let comments = await fetchComments(posts[0].id);
            console.log("Comments:", comments);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    fetchData();



        /**
         *  now we can see this Async/await is also working with the promise fetchData(), fetchPosts() & fetchComments().
         * 
         * 
         * 
                    async/await works with Promises under the hood. It is not a replacement for Promises but a cleaner way to use them.

                    How async/await Uses Promises?
                    When you write await fetchUser(), it waits for the Promise to resolve.
                    The function fetchUser() is still returning a Promise.
                    Instead of using .then(), we use await to pause execution until the Promise resolves.

         */
    