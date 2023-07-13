"use strict";
/**
 * Picking Numbers
 */

function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let maxLength = 0;
    for (let i = 0; i < a.length; i++) {
        let arr = [];
        for (let j = i; j < a.length; j++) {
            arr = a.slice(i, j + 1);
            const diff = Math.max(...arr) - Math.min(...arr);
            if (diff <= 1 && arr.length > maxLength) maxLength = arr.length;
        }
    }
    return maxLength;

    // let max = 0;
    // a.sort((a, b) => a - b);

    // let stack = [];
    // for (let i in a) {
    //     if (!stack.length) stack.push(a[i]);
    //     else if (a[i] - stack[0] <= 1) stack.push(a[i]);
    //     else {
    //         while (stack.length) stack.pop();
    //         stack.push(a[i]);
    //     }

    //     if (stack.length > max) max = stack.length;
    // }
    // return max;
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));