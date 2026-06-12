function alternateMatrixPrint(mat){
  let row = mat.length;
  let col = mat[0].length;
  let res = [];
  for(let i=0;i<row;i++){
    if(i%2==0){
      for(let j=0;j<col;j++){
        res.push(mat[i][j]);
      }
    }else{
      for(let j=col-1;j>=0;j--){
        res.push(mat[i][j]);
      }
    }
  }
  return res;
}

let matrix = [
  [3,2,1],
[8,9,3],
[1,2,0]
];

const result = alternateMatrixPrint(matrix)
console.log(result)