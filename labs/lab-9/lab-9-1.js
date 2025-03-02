// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const readlineSync = require('readline-sync');

const userId = readlineSync.question("Input your id: ");
const postId = readlineSync.question("Input post id: ");

getPostByUser(userId, postId);
getAllPostsByUser(userId)

function getPostByUser(userId, postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            if (post.userId == userId) {
                console.log(`Post ID ${postId} of User ID ${userId}:`);
                console.log(`Title of the post: ${post.title}`);
                console.log(`Content content of the post: ${post.body}`);
            } else {
                console.log(`There is no post ${postId} of User ID ${userId}`);
            }

        })
        .catch(error => console.error("Something wrong", error));
}

function getAllPostsByUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length > 0) {
                console.log(`All the post of User ID ${userId}:`);
                posts.forEach(post => {
                    console.log(`- Post ID ${post.id}: ${post.title}`);
                });
                console.log();
            } else {
                console.log(`There is not a single post User ID ${userId}.`);
            }
        })
        .catch(error => console.error("Something wrong", error));
}