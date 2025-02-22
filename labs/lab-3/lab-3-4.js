const {
    ArrayASCSorting
} = require('../../UtilMethod');

let Array1 = [1, 12, 16, 28, 34];
let Array2 = [1, 13, 16, 27, 99];
let arraySort = ArrayASCSorting(Array1,Array2);
console.log(arraySort.mergedArray);