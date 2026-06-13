function diamondPrint(n) {
  for (let i = 1; i <= n; i += 2) {
    let UpperStar = "";
    for (let j = 1; j <= (n - i) / 2; j++) {
      UpperStar += "  ";
    }
    for (let k = 1; k <= i; k++) {
      UpperStar += "* ";
    }
    console.log(UpperStar);
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    let LowerStar = "";
    for (let j = 1; j <= (n - i) / 2; j++) {
      LowerStar += "  ";
    }
    for (let k = 1; k <= i; k++) {
      LowerStar += "* ";
    }
    console.log(LowerStar);
  }
}
let num = 5;
diamondPrint(num);
