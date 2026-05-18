function binToDecimal(bin) {
  let decimal = 0;
  let p = 0;
  for(let i=bin.length-1;i>=0;i--){
    let d = parseInt(bin.charAt(i));
    decimal += Math.pow(2,p) * d;
    p++;
  }
  console.log(decimal)
}

let bin = "111";
binToDecimal(bin)