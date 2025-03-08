

async function fetchUserData() {
    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!userResponse.ok) throw new Error("Failed to fetch user");
        const user = await userResponse.json();
        console.log("User:", user);

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        if (!postsResponse.ok) throw new Error("Failed to fetch posts");
        const posts = await postsResponse.json();
        console.log("Posts:", posts);

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
        if (!commentsResponse.ok) throw new Error("Failed to fetch comments");
        const comments = await commentsResponse.json();
        console.log("Comments:", comments);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchUserData();
