function rotated90Degree(mat) {
  let n = mat.length;
  // let res = Array.from({length:n},()=>Array(n).fill(0))
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push([]);
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      res[j][n - 1 - i] = mat[i][j];
    }
  }
  console.log(res);
}
let matrix = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
rotated90Degree(matrix);
