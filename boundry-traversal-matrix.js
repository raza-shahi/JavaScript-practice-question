const matrix = [
    [5, 4, 6, 3],
    [1, 4, 3, 5],
    [5, 1, 9, 6]
];

function boundaryTraversal(matrix){
    let result = [];
    let row = matrix.length;
    let col = matrix[0].length;
    
    if(row ===1){
        for(let i=0;i<col;i++){
            result.push(matrix[i]);
        }
        return result;
    }

    if(col === 1){
        for(let j=0;j<row;j++){
            result.push(matrix[j]);
        }
        return result;
    }
    //first row
    for(let i=0; i<col ; i++){
        result.push(matrix[0][i]);
    }
    //last col
    for(let j=1;j<row-1;j++){
        result.push(matrix[j][col-1]);
    }
    //last row
    for(let i=col-2;i>=0;i--){
        result.push(matrix[row-1][i]);
    }
    //first col
    for(let j=row-2;j>0;j--){
        result.push(matrix[j][0]);
    }
    return result;
}

console.log(boundaryTraversal(matrix));