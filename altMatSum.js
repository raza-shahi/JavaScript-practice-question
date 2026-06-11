function altMatSum(mat, N) {
    let black = 0;
    let white = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if ((i + j) % 2 === 0) {
                black += mat[i][j];
            } else {
                white += mat[i][j]
            }
        }
    }
    console.log("Black sum", black)
    console.log("white sum", white)
}
const matrix = [
    [5, 4, 6, 3],
    [1, 4, 3, 5],
    [5, 1, 9, 6],
    [3, 9, 1, 7]
];
let N = 4;

altMatSum(matrix, N)


