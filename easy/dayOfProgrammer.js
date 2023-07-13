"use strict";

/**
 *  Day of the Programmer
 */
function dayOfProgrammer(year) {
    let isJulianYear = year < 1919;
    let isLeapYear;
    let date = "";
    if (isJulianYear) isLeapYear = year % 4 === 0
    else isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    
    if (year !== 1918) {
        if (isLeapYear) date = `12.09.${year}`
        else date = `13.09.${year}`
    } else {
        date = `26.09.${year}`;
    }

    return date;
}

console.log(dayOfProgrammer(1918));