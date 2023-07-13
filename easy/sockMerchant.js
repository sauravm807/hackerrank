"use strict";

/**
 * Sales by Match
 */
function sockMerchant(n, ar) {
    const obj = {};
    let count = 0;
    ar.forEach(item => {
        obj[item] = ++obj[item] || 1;
    });
    
    for (let key in obj) {
        if (obj[key] >= 2) count += Math.floor(obj[key] / 2);
    }
    return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(8, [1, 2, 1, 2, 1, 1, 3, 2]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
console.log(sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]));