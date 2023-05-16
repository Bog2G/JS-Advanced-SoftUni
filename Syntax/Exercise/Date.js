function PrevDay(year, month, day) {
  let date = new Date(year, month - 1, day - 1)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-")
    .split("-")
    .reverse()
    .map((num) => parseInt(num, 10).toString());

  date[1] = [date[2], (date[2] = date[1])][0];
  return date.join("-");
}

console.log(PrevDay(2016, 9, 30));
