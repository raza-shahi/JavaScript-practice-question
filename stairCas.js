// function stairCase(n){
//   for(let i=0;i<n;i++){
//     let space = ""
//     for(let j=0;j<=n-1-i;j++){
//      space += " ";
//     }
//     for(let k = 0;k<=i;k++){
//       space +="*"
//     }
//     console.log(space)
//   }
// }
// let num = 4;
// stairCase(num)


function stairCase(n){
  for(let i=0;i<n;i++){
    let spaces = "  ".repeat(n-i);
    let steps  = " #".repeat(i);
    console.log(spaces + steps);
  }
}
let num = 7;
stairCase(num);
