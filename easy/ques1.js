function findLargestNo(arr) {
    return Math.max(...arr);
}

function findSumOfTriplet(arr) {
    let count = 0, sum = 0;
    while (count < 3) {
        const max = findLargestNo(arr);
        arr.splice(arr.indexOf(max));
        count++;
        sum+= max;
    }
    return sum
}
console.log(findSumOfTriplet([4, 1, 2, 3, -1, 8, 10]))