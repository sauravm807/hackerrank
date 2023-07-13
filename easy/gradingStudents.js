"use strict";

/**
 * Grading Students
 */
function gradingStudents(grades) {
    const newGrades = grades.map(grade => {
        if (grade % 5 !== 0) {
            const quot = Math.ceil(grade / 5);
            const multiple = 5 * quot;
            if (multiple - grade < 3 && grade >= 38) grade = multiple;
        } 

        return grade;
    });
    return newGrades;
}

console.log(gradingStudents([73, 62, 40, 33]));