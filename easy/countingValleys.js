"use strict";
/**
 * Counting Valleys
 */
function countingValleys(steps, path) {
    let count = 0, valleyCount = 0;
    for (let step of path) {
        if (count === 0 && step === "D") valleyCount++;
        step === 'D' ? count += -1 : count += 1;
    }
    return valleyCount;
}

console.log(countingValleys(10, 'DUDDDUUDUU')) // 2
console.log(countingValleys(10, 'UDUUUDUDDD')) // 0
console.log(countingValleys(12, 'DDUUDDUDUUUD')) // 2
console.log(countingValleys(10, 'DDUDDUUDUU')) // 1
console.log(countingValleys(8, 'UDDDUDUU')) // 1