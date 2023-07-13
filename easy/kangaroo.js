"use strict";

/**
 * Number Line Jumps
 */
function kangaroo(x1, v1, x2, v2) {
    let ifKangarooMeet = "NO";
    let prevPos1, prevPos2;
    if ((x1 < x2 && v1 > v2) || (x1 > x2 && v1 < v2)) {
        if (!prevPos1) prevPos1 = x1;
        if (!prevPos2) prevPos2 = x2;
        while (prevPos1 != prevPos2) {
            const currPos1 = prevPos1 + v1;
            const currPos2 = prevPos2 + v2;
            if (x1 < x2) {
                if (currPos1 > currPos2) break;
            } else {
                if (currPos2 > currPos1) break;
            }
            if (currPos1 !== currPos2) {
                prevPos1 = currPos1;
                prevPos2 = currPos2;
            } else {
                ifKangarooMeet = "YES";
                break;
            }
        }
    }
    return ifKangarooMeet;
}

console.log(kangaroo(21, 6, 47, 3));