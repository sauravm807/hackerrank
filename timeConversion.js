"use strict";
/**
 * Time Conversion
 */
function timeConversion(s) {
    const timeArr = s.split(":");
    let hh = timeArr[0];
    let mm = timeArr[1];
    let ss = timeArr[2].replace(/[^0-9]/g, "");
    let ampm = timeArr[2].replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (ampm === "pm") {
        if (hh != 12) hh = Number(hh) + 12;
    } else {
        if (hh == 12) hh = "00";
    }
    return `${hh}:${mm}:${ss}`;
}

console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("12:05:05PM"));
console.log(timeConversion("06:40:03AM"));
console.log(timeConversion("02:34:50PM"));