
const readlineSync = require('readline-sync');

const userId = readlineSync.question("Input your id: ");
const postId = readlineSync.question("Input post id: ");

getPostByUser(userId, postId);
getAllPostsByUser(userId)

async function getPostByUser(userId, postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();

        if (post.userId == userId) {
            console.log(`Post ID ${postId} of User ID ${userId}:`);
            console.log(`Title of the post: ${post.title}`);
            console.log(`Content of the post: ${post.body}\n`);
        } else {
            console.log(`There is no post ${postId} of User ID ${userId}`);
        }
    } catch (error) {
        error => console.error("Something wrong", error);
    }
}
async function getAllPostsByUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        if (posts.length > 0) {
            console.log(`All the post of User ID ${userId}:`);
            posts.forEach(post => {
                console.log(`- Post ID ${post.id}: ${post.title}`);
            });
            console.log();
        } else {
            console.log(`There is not a single post User ID ${userId}.`);
        }
    } catch (error) {
        error => console.error("Something wrong", error);
    }
}