// Function to count the number of words in a string

const readlineSync = require('readline-sync');
const userStr = readlineSync.question("Input your string: ");
// const str = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
countWords();

function countWords() {
    const words = userStr.replace(/[,.!?]/g, "").split(" ");

    // Sử dụng một object để đếm số lần xuất hiện của từng từ
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    console.log(wordCount);
}