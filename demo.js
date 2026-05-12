function starPyramidPatern(num){
  for(let i=1;i<=num;i++){
    let space = "";
    for(let j=1;j<=n-i;j++){
      space += " ";
    }
    for(let k=1;k<=i;k++){
      space += "* ";
    }
    console.log(space);
  }
}
let n = 8;
starPyramidPatern(n)