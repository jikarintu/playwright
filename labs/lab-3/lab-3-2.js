const {
    findMinMax
} = require('../../UtilMethod');

let intArr = [1, 2, 3, 4, 5];
let MinMaxArr = findMinMax(intArr);

if (MinMaxArr.message) {
    console.log(MinMaxArr.message);
} else {
    console.log(`Minimum: ${MinMaxArr.min}`);
    console.log(`Maxiumum: ${MinMaxArr.max}`);
}