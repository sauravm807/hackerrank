// const crypto = require('crypto');
// const cipher = crypto.createCipher('aes192', 'hey');
// let encrypted = "";
// cipher.on('end', () => {
//     console.log(encrypted);
// });
// cipher.write('hey');
// cipher.end();


// var buffer1 = new Buffer('this is diverse nation');
// var buffer2 = new Buffer(5);
// buffer1.copy(buffer2);
// console.log(buffer2.toString());

// const event = require('events');
// const e = new event.EventEmitter();
// e.emit('error');

// const ut = require('util');
// console.log(ut.isNullOrUndefined(1));


function count1InArr(arr) {
    let oneCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            oneCount++;
        }
    }

    return oneCount;
}

const getIJ = function (arr) {
    let iPos = null;
    let jPos = null;
    let prevIPos = null;
    let prevJPos = null;
    let prev0Count = 0;
    let continue0s = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            if (iPos == null) {
                iPos = i;
            }
            jPos = i;
            continue0s++;
        } else {
            if (prev0Count && prev0Count < continue0s) {
                prevIPos = iPos;
                prevJPos = jPos;
                prev0Count = continue0s;
            } else {
                if (iPos != null && jPos != null) {
                    prevIPos = iPos;
                    prevJPos = jPos;
                    prev0Count = continue0s;
                }
                iPos = null;
                jPos = null;
                continue0s = 0;
            }

        }
        // console.log({ iPos, jPos, prevIPos, prevJPos, prev0Count, continue0s })
    }
    if (prev0Count < continue0s) {
        return { i: iPos, j: jPos }
    }
    if (prev0Count > continue0s) {
        return { i: prevIPos, j: prevJPos }
    }
    if (prevIPos && prevJPos) {
        return { i: prevIPos, j: prevJPos };
    }
    return { i: iPos, j: jPos };
}



function reverseTheArr(arr, startPos, endPos) {
    if (startPos == null || endPos == null) {
        return arr;
    }
    for (let i = startPos; i <= endPos; i++) {
        arr[i] = 1;
    }

    return arr;
}

function main(arr) {
    const { i, j } = getIJ(arr);
    console.log(i, j)
    const changedArr = reverseTheArr(arr, i, j);

    const oneCount = count1InArr(changedArr);
    return oneCount;
}


console.log(main([1, 0, 1, 0, 1]))
