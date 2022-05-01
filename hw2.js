// the output should be true
const grid1 = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

// the output should be false
const grid2 = [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

function checkRows(grid) {
    let valid = true;

    for (const row of grid) {
        if (!valid) {
            break;
        }

        let temp = {};

        row.filter(item => item !== ".").forEach(item => {
            if (temp[item]) {
                valid = false;
            } else {
                temp[item] = 1;
            }
        });
    }

    return valid;
}

function rotateGrid(grid) {
    return grid.map((item, index) => {
        const newArr = [];

        for (const arr of grid) {
            newArr.push(arr[index]);
        }

        return newArr.reverse();
    });
}

function checkSubGrids(grid) {
    const subGrids = [];
    const getSubGridRow = function (grid, curRow, curCol) {
        const currentSubGrid = [];

        for (let row = curRow; row < curRow + 3; row++) {
            for (let col = curCol; col < curCol + 3; col++) {
                currentSubGrid.push(grid[row][col]);
            }
        }

        return currentSubGrid;
    };

    for (let i = 0; i < grid.length; i += 3) {
        for (let j = 0; j < grid.length; j += 3) {
            subGrids.push(getSubGridRow(grid, i, j));
        }
    }

    return checkRows(subGrids);
}

function solution(grid) {
    return (
        checkRows(grid) &&
        checkRows(rotateGrid(grid)) &&
        checkSubGrids(grid)
    );
}
console.log(solution(grid1)); // true
console.log(solution(grid2)); // false