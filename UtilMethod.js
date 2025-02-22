function findMinMax(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let index = 1; index < arr.length; index++) {
        const value = arr[index];
        if (value < minValue) {
            minValue = value;
        } else if (value > maxValue) {
            maxValue = value;
        }
    }
    return { min: minValue, max: maxValue }
}

function countEvenAndOddNum(arr) {
    let evenNum = 0;
    let oddNum = 0;
    let evenNumberArr = [];
    let oddNumberArr = [];
    for (let index = 0; index < arr.length; index++) {
        const value = arr[index];
        if (isOddNumber(value)) {
            oddNum++;
            oddNumberArr.push(value);
        } else {
            evenNum++;
            evenNumberArr.push(value);
        }
    }
    return { even: evenNum, odd: oddNum, evenArray: evenNumberArr, oddArray: oddNumberArr };
}

function isOddNumber(value) {
    return value % 2 !== 0;
}

function removeOddNum(arr) {
    for (let index = arr.length - 1; index >= 0; index--) {
        if (arr[index] % 2 !== 0) {
            arr.splice(index, 1);
        }
    }
    return { evenArr: arr };
}

function printArray(arr) {
    if (arr.length === 0) {
        return '';
    } else {
        return `---> ${arr}`
    }
}

function bubbleSort(arr) {
    for (let unsortedPosition = arr.length - 1; unsortedPosition > 0; unsortedPosition--) {
        for (let index = 0; index < unsortedPosition; index++) {
            const leftValue = arr[index];
            const rightValue = arr[index + 1];
            if (leftValue > rightValue) {
                swapASC(arr, index);
            }
        }
    }
    return arr;
}

function swapASC(arr, index) {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
}

function ArrayASCSorting(foo, bar) {
    let fooPosition = 0;
    let barPosition = 0;
    let merged = [];

    const fooLenght = foo.length;
    const barLenght = bar.length;

    while (fooStillHaveElement(fooPosition, fooLenght) && barStillHaveElement(barPosition, barLenght)) {
        const fooValue = foo[fooPosition];
        const barValue = bar[barPosition];

        if (fooValue <= barValue) {
            merged.push(fooValue);
            fooPosition++;
        } else {
            merged.push(barValue);
            barPosition++;
        }
    }

    while (fooStillHaveElement(fooPosition, fooLenght)) {
        merged.push(foo[fooPosition]);
        fooPosition++;
    }

    while (barStillHaveElement(barPosition, barLenght)) {
        merged.push(bar[barPosition]);
        barPosition++;
    }
    return { mergedArray: merged };
}

function fooStillHaveElement(fooPosition, fooLenght) {
    return fooPosition < fooLenght;
}

function barStillHaveElement(barPosition, barLenght) {
    return barPosition < barLenght;
}

module.exports = {
    findMinMax,
    countEvenAndOddNum,
    removeOddNum,
    printArray,
    bubbleSort,
    ArrayASCSorting
}