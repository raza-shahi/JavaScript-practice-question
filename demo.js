function squareMatrixMultiply(mat1, mat2, n) {
  let product = [];
  for(let i=0;i<n;i++){
    product.push([]);
    for(let j=0;j<n;j++){
      product[i][j] = 0;
      for(let k=0;k<n;k++){
        product[i][j] += mat1[i][k]*mat2[k][j];
      }
    }
  }
  console.log(product)
}

let n = 3;
let matrix1 = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
let matrix2 = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
squareMatrixMultiply(matrix1, matrix2, n);
