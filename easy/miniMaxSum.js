"use strict";

/**
 * Mini-Max Sum
 */
function miniMaxSum(arr) {
    arr = arr.sort((a, b) => a - b);
    const minSum = arr[0] + arr[1] + arr[2] + arr[3];
    const maxSum = arr[1] + arr[2] + arr[3] + arr[4];
    return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum([ 1, 2, 3, 4, 5 ]));