"use strict";
/**
 * Electronics Shop
 */
function getMoneySpent(keyboards, drives, b) {
    let max = -1;
    for (let keyboard of keyboards) {
        for (let drive of drives) {
            const sum = keyboard + drive;
            if (sum > max && sum <= b) {
                max = sum;
            } 
        }
    }
    return max;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
console.log(getMoneySpent([4], [5], 5)); // -1