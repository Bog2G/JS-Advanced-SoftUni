function same(num) {
  num = num.toString();
  let sum = num
    .split("")
    .map((digit) => Number(digit))
    .reduce((total, digit) => total + digit);
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] !== num[i + 1]) {
      console.log("false\n" + sum);
      return;
    }
  }

  console.log(`true\n` + sum);
}

same(2222222223);
