"use strict";

/**
 * Compare the Triplets
 */
function compareTriplets(a, b) {
    const result = { a: 0, b: 0 };
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? ++result['a'] : a[i] < b[i] ? ++result['b'] : '';
    }
    return [result['a'], result['b']];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));