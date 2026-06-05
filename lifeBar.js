function findMaxLife(arr, n, m) {
  let maxLifeAt = -1;
  let maxLife = 0;
  for (let i = 0; i < n; i++) {
    let countLife = 0;
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        countLife++;
      }
    }
    if (countLife > maxLife) {
      maxLifeAt = i;
      maxLife = countLife;
    }
  }
  return maxLifeAt;
}

let n = 4;
let m = 2;

let lifeBar = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0]
];

let maxLifeAtLevel = findMaxLife(lifeBar, n, m);
console.log("Max life bar at level ", maxLifeAtLevel);
