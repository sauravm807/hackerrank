"use strict";

/**
 * Drawing Book
 */
function pageCount(n, p) {
    let first = Math.ceil((p - 1) / 2);
    let last= n % 2 == 0 ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2);
    return first < last ? first : last;
}



console.log(pageCount(6, 2));
console.log(pageCount(5, 4));
// console.log(pageCount(7, 4));