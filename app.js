"use strict";
const studentResults = [
    {
        id: 1,
        name: "Abdillaahi ali",
        totalResult: 84
    },
    {
        id: 2,
        name: "Asma ali",
        totalResult: 98
    },
    {
        id: 3,
        name: "Khalid farah ali",
        totalResult: 68
    },
    {
        id: 4,
        name: "Aw aadan jama",
        totalResult: 45,
    }
];
const studentResultGrades = [];
for (let i = 0; i < studentResults.length; i++) {
    if (studentResults[i].totalResult >= 90) {
        studentResultGrades.push(Object.assign(Object.assign({}, studentResults[i]), { grade: "A" }));
    }
    else if (studentResults[i].totalResult >= 80) {
        studentResultGrades.push(Object.assign(Object.assign({}, studentResults[i]), { grade: "B" }));
    }
    else if (studentResults[i].totalResult >= 70) {
        studentResultGrades.push(Object.assign(Object.assign({}, studentResults[i]), { grade: "C" }));
    }
    else if (studentResults[i].totalResult >= 60) {
        studentResultGrades.push(Object.assign(Object.assign({}, studentResults[i]), { grade: "D" }));
    }
    else {
        studentResultGrades.push(Object.assign(Object.assign({}, studentResults[i]), { grade: "F" }));
    }
}
console.log(studentResultGrades);
