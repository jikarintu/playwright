const {
    countEvenAndOddNum
} = require('../../UtilMethod');

let intArr = [1, 2, 3, 4, 5];
let numberCount = countEvenAndOddNum(intArr);

console.log(`Even numbers: ${numberCount.even}`);
console.log(`Odd numbers: ${numberCount.odd}`);