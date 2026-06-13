let matrix = [
    [3, 0, 2],
    [0, 0, 0],
    [6, 0, 3]
]


function isSpecialMatrix(mat) {
    let n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Check if cell is on the primary diagonal or the secondary diagonal
            if (i === j || i + j === n - 1) {
                if (mat[i][j] === 0) {
                    return false;
                }
            } else {
                // Otherwise, the element must be zero
                if (mat[i][j] !== 0) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(isSpecialMatrix(matrix));
