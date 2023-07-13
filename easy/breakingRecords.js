"use strict";

/**
 * Breaking the Records
 */
function breakingRecords(scores) {
    let min = scores[0], max = scores[0];
    const obj = { breakMin: 0, breakMax: 0 }

    for (let score of scores) {
        if (score < min) {
            ++obj['breakMin'];
            min = score;
        }
        if (score > max) {
            ++obj['breakMax'];
            max = score;
        }
    }
    return [obj.breakMax, obj.breakMin];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([0, 9, 3, 10, 2, 20]));