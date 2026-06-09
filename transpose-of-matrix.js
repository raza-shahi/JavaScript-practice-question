function transposeOfMatrix(mat, n) {
  // let resMat = Array.from({length:n},()=>Array(n).fill(0))
  let resMat = [];

  for (let i = 0; i < n; i++) {
    resMat.push([]);
    for (let j = 0; j < n; j++) {
      resMat[i].push(0);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      resMat[j][i] = mat[i][j];
    }
  }
  return resMat;
}

let matrix = [
  [3, 4, 5, 1],
  [9, 8, 5, 3],
  [4, 6, 1, 5],
  [4, 2, 3, 1],
];
let n = 4;
console.log(transposeOfMatrix(matrix, n));
