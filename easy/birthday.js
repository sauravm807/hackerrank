"use strict";

/**
 * Subarray Division
 */
function birthday(s, d, m) {
    let subArrCount = 0;
    for (let i = 0; i < s.length; i++) {
        let count = 1;
        if (i < s.length - m + 1) {
            let sum = 0;
            for (let j = i; count <= m; j++) {
                sum += s[j];
                count++;
            }
            if (sum === d) ++ subArrCount;
        }
    }
    return subArrCount;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 3));