"use strict";

/**
 * Forming a Magic Square
 */
function formingMagicSquare(s) {
    function calculateDifference(arr, s) {
        let diff = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                diff += Math.abs(arr[i][j] - s[i][j]);
            }
        }
        return diff;
    }

    const allMagicSquare = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]]
    ];

    let minDiff = 0;

    for (let item of allMagicSquare) {
        const diff = calculateDifference(item, s);
        if (!minDiff || diff < minDiff) minDiff = diff;
    }

    return minDiff;
}

console.log(formingMagicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6]
]));

console.log(formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2]
]));

console.log(formingMagicSquare([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5]
]));