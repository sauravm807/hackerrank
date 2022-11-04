"use strict";

/**
 * Between Two Sets
 */
function getTotalX(a, b) {
    const newSet = [];
    const finalSet = [];
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        let ifDivided = true;
        for (let num of a) {
            if (i % num !== 0) {
                ifDivided = false;
                break;
            }
        }
        if (ifDivided) newSet.push(i);
    }

    for (let item of newSet) {
        let ifDivided = true;
        for (let num of b) {
            if (num % item !== 0) {
                ifDivided = false;
                break;
            }
        }
        if (ifDivided) finalSet.push(item);
    }

    return finalSet.length;
}

console.log(getTotalX([3, 4], [24, 48]));