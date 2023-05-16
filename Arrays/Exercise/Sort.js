function SortName(arr) {
  arr.sort().map((el, idx) => console.log(`${idx + 1}.${el}`));
}

SortName(["John", "Bob", "Christina", "Ema"]);
