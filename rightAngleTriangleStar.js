function rightAngleTriangleStar(num){
  for(let i=1;i<=num;i++){
    let star = "";
    for(let j = 1;j<=i;j++){
      star += "*";
    }
    console.log(star);
  }
}
let n  = 7;
rightAngleTriangleStar(n);
