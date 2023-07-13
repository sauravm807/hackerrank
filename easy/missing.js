function findMissingNo(arr) {
    let missingNo = null;
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] > 1) missingNo = arr[i] + 1;
    }
    return missingNo;
}

console.log(findMissingNo([2, 1, 4, 5, 6, 9, 7, 10, 8]));