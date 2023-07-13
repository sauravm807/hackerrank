"use strict";

/**
 * Plus Minus
 */
function plusMinus(arr) {
    let sumObj = { pos: 0, neg: 0, zer: 0 };

    for (let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? ++sumObj['pos'] : arr[i] < 0 ? ++sumObj['neg'] : ++sumObj['zer'];
    }

    let ratioPositive = (sumObj['pos'] / arr.length).toFixed(6);
    let ratioNegative = (sumObj['neg'] / arr.length).toFixed(6);
    let ratioZero = (sumObj['zer'] / arr.length).toFixed(6);

    return `${ratioPositive}\n${ratioNegative}\n${ratioZero}`;
}

console.log(plusMinus([ -4, 3, -9, 0, 4, 1 ]));