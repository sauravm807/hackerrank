"use strict";

/**
 * Migratory Birds
 */
function migratoryBirds(arr) {
    const birdsCount = {};
    let maxCount = 0;
    let maxCountbird = 0;

    for (let key of arr) {
        birdsCount[key] = ++birdsCount[key] || 1;
    }
    
    for (let key in birdsCount) {
        if (!maxCount) {
            maxCount = birdsCount[key];
            maxCountbird = key;
        } else {
            if (maxCount < birdsCount[key]) {
                maxCount = birdsCount[key]
                maxCountbird = key;
            } else {
                if (maxCount === birdsCount[key]) {
                    if (key < maxCountbird) maxCountbird = key;
                }
            }
        }
    }
    return maxCountbird;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 1, 2, 3]));