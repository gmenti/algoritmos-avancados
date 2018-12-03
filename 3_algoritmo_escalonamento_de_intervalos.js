const scaleInterval = (starts, finishes, n) => {
  let i = 1;
  const x = [];

  while (i <= n) {
    x.push(i);
    let k = i + 1;
    while (k <= n && starts[k] < finishes[i]) {
      k++;
    }
    i = k;
  }

  return x;
};

const scaleInterval2 = (starts, finishes, n) => {
  let f0 = Infinity;
  const x = [];
  let i = 1;
  for (let k = 1; k < n; k++) {
    if (starts[k] > finishes[i]) {
      x.push(k);
    }
    i = k;
  }
  return x;
};

console.log(
  scaleInterval(
    [4, 6, 13, 4, 2, 6, 7, 9, 1, 3, 9],
    [8, 7, 14, 5, 4, 9, 10, 11, 6, 13, 12],
    11,
  ),
  scaleInterval2(
    [4, 6, 13, 4, 2, 6, 7, 9, 1, 3, 9],
    [8, 7, 14, 5, 4, 9, 10, 11, 6, 13, 12],
    11,
  ),
);

// 4 to 8
// 6 to 7
// 9 to 12
