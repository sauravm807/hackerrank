"use strict";

/**
 * Staircase
 */
function staircase(n) {
    let str = "";
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= n; j++) {
            j < i ?  str += " " : str += "#";
        }
        str += "\n";
    }
    return str;

}

console.log(staircase(4));