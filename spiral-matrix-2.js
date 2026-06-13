function spiralMarix2(mat) {
  let top = 0;
  let right = mat[0].length - 1;
  let bottom = mat.length - 1;
  let left = 0;
  let res = [];

  while (top <= bottom && left <= right) {
    for (let i = top; i <=right; i++) {
      res.push(mat[top][i]);
    }
    top++;
    for (let j = top; j <= bottom; j++) {
      res.push(mat[j][right]);
    }
    right--;
    if (bottom >= top) {
      for (let i = right; i >= left; i--) {
        res.push(mat[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(mat[i][left]);
      }
      left++;
    }
  }
  return res;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralMarix2(matrix))