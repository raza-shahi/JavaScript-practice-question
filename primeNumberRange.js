function primeNumberRange(num) {
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let n = 8;
primeNumberRange(n);
