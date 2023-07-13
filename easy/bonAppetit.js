"use strict";

/**
 * Bill Division
 */
function bonAppetit(bill, k, b) {
    const totalCost = bill.reduce((sum, a) => sum + a, 0);
    const annaBill = (totalCost - bill[k]) / 2;
    return annaBill === b ? "Bon Appetit" : b - annaBill;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));