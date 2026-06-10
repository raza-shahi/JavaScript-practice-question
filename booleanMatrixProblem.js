// function BooleanMatrixProblem(m, n, arr) {
//     let res = [];
//     for (let i = 0; i < m; i++) {
//         if (arr[i].includes(1)) {
//             res.push(new Array(n).fill(1));
//         } else {
//             res.push(new Array(n).fill(0));
//         }
//     }
//     return res;
// }
function BooleanMatrixProblem(m, n, arr) {
    let res = [];
    for (let i = 0; i < m; i++) {
        res[i] = new Array(n).fill(0);
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === 1) {
                res[i] = new Array(n).fill(1);
                break;
            }
        }
    }
    return res;
}


let mat = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1]
];
let m = 5;
let n = 4;
console.log(BooleanMatrixProblem(m, n, mat))