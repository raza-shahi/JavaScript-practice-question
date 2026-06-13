// Write a function that takes a matrix and returns an array of its elements in spiral order.(anti-clockwise).

function spiralMatrix(mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
        return [];
    }
    let top = 0;
    let right = mat[0].length - 1;
    let bottom = mat.length - 1;
    let left = 0;
    let res = [];

    while (top <= bottom && left <= right) {
        for (let col = left; col <= bottom; col++) {
            res.push(mat[col][left]);
        }
        left++;
        for (let row = left; row <= right; row++) {
            res.push(mat[bottom][row]);
        }
        bottom--;
        if (right >= left) {
            for (let col = bottom; col >= top; col--) {
                res.push(mat[col][right]);
            }
            right--;
        }
        if (top <= bottom) {
            for (let row = right; row >= left; row--) {
                res.push(mat[top][row]);
            }
            top++
        }
    }
    return res;

}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(spiralMatrix(matrix))