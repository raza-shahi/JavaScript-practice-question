const printContinusCharactorPatter =(n)=>{
  let alphabates = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0;i<n;i++){
    let res = "";
    let start = i;
    for(let j=0;j<=i;j++){
      res += alphabates[(start + j)%26]
    }
    console.log(res)
  }
}
let num = 26;
printContinusCharactorPatter(num)