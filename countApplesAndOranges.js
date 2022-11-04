"use strict";

/**
 * Apple and Orange
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const count = { apple: 0, orange: 0 };
    for (let apple of apples) {
        const pos = apple + a;
        if (pos >= s && pos <= t) ++count['apple'];
    }
    for (let orange of oranges) {
        const pos = b + orange;
        if (pos >= s && pos <= t) ++count['orange'];
    }
    return `${count.apple}\n${count.orange}`;
}

console.log(countApplesAndOranges(7, 10, 4, 12, [ 2, 3, -4 ], [ 3, -2, -4 ]));