// the output should be true
const roadRegister1 = [
    [false, true, false, false],
    [false, false, true, false],
    [true, false, false, true],
    [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
    [false, true, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false],
    [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister3 = [
    [false, true, false],
    [false, false, false],
    [true, false, false],
];

function solution(roadRegister) {
    let temp = {};

    for (let i = 0; i < roadRegister.length; i++) {
        for (let j = 0; j < roadRegister[0].length; j++) {
            if (roadRegister[i][j] === true) {
                temp[i] ? temp[i] += 1 : temp[i] = 1;
                temp[j] ? temp[j] -= 1 : temp[j] = -1;
            }
        }
    }

    for (let key in temp) {
        if (temp[key] != 0) {
            return false;
        }
    }

    return true;
}
// console.log(solution(roadRegister3)); // false
// console.log(solution(roadRegister1)); // true
// console.log(solution(roadRegister2)); // true