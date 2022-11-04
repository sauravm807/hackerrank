"use strict";

/**
 * Birthday Cake Candles
 */
function birthdayCakeCandles(candles) {
    let count = 1;
    let largestCount = 0;
    candles = candles.sort((a, b) => a - b);
    for (let i = 1; i < candles.length; i++) {
        let char = candles[i];
        let prevChar = candles[i - 1];
        if (prevChar === char) {
            count++;
        } else {
            count = 1;
        }
        if (count > largestCount) largestCount = count;
    }
    return largestCount;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));