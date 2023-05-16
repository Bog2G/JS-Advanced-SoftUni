function Magical(arr) {
  let sums = [];

  arr.map((subArr) =>
    sums.push(subArr.reduce((total, current) => total + current))
  );

  return sums.reduce((total, current) => total + current) === sums[0] * 3;
}

console.log(Magical([[], [], []]));
