function spiralMatrix2(mat) {
  if (!mat || mat.length === 0 || mat[0].length === 0) {
    return []
  }

  let top = 0;
  let right = mat[0].length - 1;
  let bottom = mat.length - 1;
  let left = 0;
  let result = [];

  while (top <= bottom && left <= right) {
    for (let col = top; col <= right; col++) {
      result.push(mat[top][col]);
    }
    top++;
    for (let row = top; row <= bottom; row++) {
      result.push(mat[row][right]);
    }
    right--;
    if (bottom >= top) {
      for (let col = right; col >= left; col--) {
        result.push(mat[bottom][col]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(mat[row][left]);
      }
      left++;
    }
  }
  return result;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralMatrix2(matrix))