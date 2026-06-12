let matrix = [
    [3, 0, 2],
    [0, 5, 0],
    [6, 0, 3]
]


function isSpecialMatrix(mat) {
    let n = mat.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if (mat[i][j] !== mat[j][i]) {
                return false
            }
        }
    }
    return true;

}

console.log(isSpecialMatrix(matrix));
