function alphabetPatternPrint(num) {
  if (num >= 1 && num <= 26) {
    for (let i = 1; i <= num; i++) {
      let res = "";
      for (let j = 1; j <= i; j++) {
        res += String.fromCharCode(65 + i - 1);
      }
      console.log(res);
    }
  }else{
    console.log("enter the valid number")
  }
}
let n = 26;
alphabetPatternPrint(n);
